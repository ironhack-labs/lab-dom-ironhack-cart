var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $createButt = document.getElementById('create');
var $product = document.getElementsByClassName('product');

function updateSubtot($product) {
  var $priceUn = document.querySelectorAll('.pu span')[$product].innerHTML;
  var $qty = document.querySelectorAll('.qty input')[$product].value;
  var $subTot= $priceUn * $qty;
  document.querySelectorAll('.subtot span')[$product].innerHTML = $subTot;
  return $subTot;
}

function addItem() {
  const name = document.querySelector('.new .name').value
  const price = document.querySelector('.new .price').value
  let table = document.querySelector("tbody");
  let newRow = document.createElement('tr')
  newRow.innerHTML = `<tr class="product">
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="pu">$<span>${price}</span></td>
  
    <td class="qty">
      <label>
        <input type="number" value="0" min="0" />
      </label>
    </td>
    <td class="subtot">$<span>0</span></td>
    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  </tr>`
  table.appendChild(newRow)
  for(let i=0; i<$delete.length; i++) {
    $delete[i].onclick = (e) => e.currentTarget.parentElement.parentElement.remove();
  }
}


function calcAll() {
  var precioUni = document.querySelectorAll('.subtot span')
  var resultado = 0;
  for (let i=0; i < precioUni.length; i++){
    resultado += parseInt(updateSubtot(i))
}
document.querySelectorAll('h2 span')[0].innerHTML = resultado;
return resultado
}
calcAll();

$calc.onclick = calcAll;
$createButt.onclick = addItem;

$delete = document.getElementsByClassName('btn-delete')

for(let i=0; i<$delete.length; i++) {
  $delete[i].onclick = (e) => e.currentTarget.parentElement.parentElement.remove();
}