var $create = document.getElementById('create');
var $calc = document.querySelector('.btn-success')
var $delete = document.getElementsByClassName('btn-delete')


function updateSubtot($product) {
  let $pu = document.querySelectorAll('.pu span')[$product].textContent;
  let $qty = document.querySelectorAll('.qty input')[$product].value;
  let subtotal = $pu * $qty
  let $subtotal = document.querySelectorAll('.subtot span')[$product];
  $subtotal.textContent = subtotal;
  return subtotal;
}


function calcAll() {
  let cadaPrecio = document.querySelectorAll('.subtot span')
  let result = 0;
  for (let i = 0; i < cadaPrecio.length; i++) {
    result += updateSubtot(i)
  }
  document.querySelectorAll('h2 span')[0].innerHTML = result
  return result
}


function addItem() {
  var newRow = document.createElement('tr')
  var name = document.querySelector('.new input')
  var price = document.querySelector('.price')
  let table = document.querySelector('tbody')
  newRow.innerHTML = `<td class="name">
  <span> ${name.value} </span></td> <td class="pu">$<span> ${price.value} </span></td>
  <td class="qty"> <label> <input type="number" value="0" min="0" /> </label>
  </td> <td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button>
  </td>`
  
  table.appendChild(newRow)
  
  for (let i = 0; i < $delete.length; i++) {
    $delete[i].onclick = (e) => e.currentTarget.parentElement.parentElement.remove();
  }
  name.value = ''
  price.value = ''
}

$create.onclick = addItem;
$calc.onclick = calcAll;

