var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

var $createButt = document.getElementById('create');



function updateSubtot($product) {
  let priceUnity = document.querySelectorAll('.pu span')[$product].innerHTML
  let quantity = document.querySelectorAll('.qty input')[$product].value
  let subtot_ = priceUnity * quantity;
  document.querySelectorAll('.subtot span')[$product].innerHTML = subtot_
  return subtot_
}



function addItem() {
  const name = document.querySelector('.new .name').value
  const price = document.querySelector('.new .price').value
  let table = document.querySelector('tbody');
  let tr = document.createElement('tr');
  tr.innerHTML = `<tr class="product">
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

  table.appendChild(tr);
  for (let i = 0; i < $delete.length; i++) {
    $delete[i].onclick = (e => e.currentTarget.parentElement.parentElement.remove());
  }
}



function calcAll() {
  let priceUnity = document.querySelectorAll('.pu span')
  let resultado = 0;
  for (let i = 0; i < priceUnity.length; i++) {
    resultado += parseInt(updateSubtot(i))
  }
  document.querySelectorAll('h2 span')[0].innerHTML = resultado;
  return resultado
}

$calc.onclick = calcAll;
$createButt.onclick = addItem;


$delete = document.getElementsByClassName('btn-delete');

for (let i = 0; i < $delete.length; i++) {
  $delete[i].onclick = (e => e.currentTarget.parentElement.parentElement.remove());
}