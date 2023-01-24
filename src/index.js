// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const val = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span');
  const subTotalMath = price * val;
  subTotal.innerHTML = subTotalMath;
  return subTotalMath
}

function calculateAll() {
const arrayProducts = document.getElementsByClassName("product");
let total = 0;
let value = 0;
for (let i = 0; i < arrayProducts.length; i++){
  value = updateSubtotal(arrayProducts[i]);
  total += value;
}

const allTotal = document.querySelector('#total-value span');
allTotal.innerHTML = total;
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);  */
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const deleteRow = target.parentNode.parentNode;
  const initialParent = target.parentNode.parentNode.parentNode;
  initialParent.removeChild(deleteRow);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const nome = document.getElementById('text').value
  const price = document.getElementById('price').value
  let tableBody = document.getElementById('tbody');
  let row = document.createElement('tr');
  row.classList.add ('product');
  row.innerHTML = `<td class="name">
  <span>${nome}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input id="number" type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
tableBody.appendChild(row);
const removeArray = document.querySelectorAll('.btn-remove');

for (let i= 0; i < removeArray.length; i++){
  removeArray[i].addEventListener('click', removeProduct)
}
const clearValueText = document.getElementById('text');
clearValueText.value = "";
const clearValuePrice = document.getElementById('price');
clearValuePrice.value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

const removeArray = document.querySelectorAll('.btn-remove');

for (let i= 0; i < removeArray.length; i++){
  removeArray[i].addEventListener('click', removeProduct)
}
const createButton = document.querySelector('#create');
createButton.addEventListener('click', createProduct)

});
