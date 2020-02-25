var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

function updateSubtot($product) {
  // Iteration 1.1
  let input = document.querySelectorAll('.qty input')[$product].value;
  let priceUnit = document.querySelectorAll('.pu span')[$product].innerHTML;
  let subTotal = input * priceUnit; 
  document.querySelectorAll('.subtot span')[$product].innerHTML = subTotal;
return subTotal
}

document.getElementById('create').onclick = newRow;


function newRow(){
let newProduct = document.querySelector('.new input[type="text"]');
let newPriceUnit = document.querySelector(' .new input[type="number"]');
let newRow = document.createElement('tr');
newRow.className = 'fila';
newRow.innerHTML = `<td class="name">
<span>${newProduct.value}</span>
</td>

<td class="pu">$<span>${newPriceUnit.value}</span></td>

<td class="qty">
<label>
  <input type="number" value="0" min="0" />
</label>
</td>

<td class="subtot">$<span>0</span></td>

<td class="rm">
<button class="btn btn-delete">Delete</button>
</td>`
$cart.appendChild(newRow);
}

function calcAll() {
  let total = 0;
  let arraytotal = document.querySelectorAll('.subtot span');
  for (let i = 0; i < arraytotal.length; i++) {
    
    total+=updateSubtot(i);    
  }
  document.querySelectorAll('h2 span')[0].innerHTML = total;
}
//$calc.onclick = updateSubtot;
$calc.onclick = calcAll;
//console.log('hola');