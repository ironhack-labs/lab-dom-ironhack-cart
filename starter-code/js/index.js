const $cart = document.querySelector('#cart tbody');
const $calc = document.getElementById('calc');
const $deletes = document.querySelectorAll('.btn-delete');
const $create = document.getElementById('create')

function updateSubtot(product) {
  const $subtot = product.querySelector('.subtot span'); 
  const puAmount = parseInt(product.querySelector('.pu span').innerText);
  const qtyAmount = parseInt(product.querySelector('.qty input').value);
  $subtot.innerText = (puAmount*qtyAmount);
  return puAmount*qtyAmount;
}

function calcAll() {
  const allSubtots = document.querySelectorAll('.subtot span')
  let subtotSum = 0;
  allSubtots.forEach(function (subtot) {
    updateSubtot(subtot.closest('.product'));
    subtotSum += parseInt(subtot.innerText);
  })
  document.querySelector('h2 span').innerText= subtotSum.toString();
}
$calc.addEventListener('click', calcAll);

function deleteRow(e){
  const toBeDeleted = e.currentTarget.closest('.product')
  toBeDeleted.parentNode.removeChild(toBeDeleted);
}

$deletes.forEach(function(btn){
  btn.addEventListener('click', deleteRow);
});

function addRow(){
  const name = document.querySelector('tfoot input[type=text]').value;
  const amount = document.querySelector('tfoot input[type=number]').value;
  const row = document.createElement('tr');
  const htmlData = `<td class="name"><span>${name}</span></td><td class="pu">$<span>${amount}</span></td><td class="qty"><label><input type="number" value="0" min="0"></label></td><td class="subtot">$<span>0</span></td><td class="rm"><button class="btn btn-delete">Delete</button></td>`
  if (name.length > 0 && amount.length > 0){
    $cart.appendChild(row);
    $cart.lastChild.classList.add("product");
    $cart.lastChild.innerHTML=htmlData;
    $cart.lastChild.querySelector('.btn-delete').addEventListener('click', deleteRow); 
    document.querySelector('tfoot input[type=text]').value = "";
    document.querySelector('tfoot input[type=number]').value = "";
  }
}

$create.addEventListener('click', addRow);
