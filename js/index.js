
// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input');

  console.log(price,quantity)

  const priceValue = parseFloat (price.innerText);
  const quantityValue = quantity.valueAsNumber; // para que es el valueAsNumber

  const subTotalValue = priceValue * quantityValue;

  const subTotal = product.querySelector('.subtotal span');

  subTotal.innerText = subTotalValue.toFixed(2);

  return subTotalValue;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.


  const products = document.getElementsByClassName('.product');

  let totalValue = 0;

for(let product of products){
  totalValue +=updateSubtotal(product)
}


  // end of test

  // ITERATION 2
  //... your code goes here

  document.querySelector('#total-value span').innerText = totalValue;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  //... your code goes here

  const row = target.parentNode.parentNode;

  const parent = row.parentNode;

  parent.removeChild(row)
  calculateAll();

  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here

const createRow = document.querySelector('create-product');
let newProdNameInput = createRow.querySelector('input')
let newProdNameValue = newProdNameInput.value
let newProdPriceInput = createRow.querySelector('input[type=number')

let newProdPriceValue = Number (newProdPriceInput.valueAsNumber).toFixed(2);


const newTableRow = document.createElement('tr')
newTableRow.className = 'product'

newTableRow.innerHTML = `

<td class="name">
  <span>${newProdNameValue}</span>
</td>
<td class="price">$<span>${newProdPriceValue}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>


`
const parent = document.querySelector('#cart tbody')

parent.appendChild(newTableRow);

const removeBtn = newTableRow.querySelector('btn-remove')
removeBtn.addEventListener('click',removeProduct)

newProdNameValue.value = '';
newProdPriceValue.value = 0 ;


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('#calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const removeBtn = document.querySelectorAll('.btn-remove')

  for(let btn of removeBtn ){
    btn.addEventListener('click',removeProduct)
  }

const createBtn = document.getElementById('#create')

if(createBtn){
  createBtn.addEventListener('click',createProduct)
}

});




// mi codigo pero no se porqué no funciona:

/* // ITERATION 1

//Preguntar: porqué me da null, inclusive si lo pongo afuera.
//const quantity =document.querySelector('product .quantity');

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
const price = product.querySelector('.price span');
const quantity =product.querySelector('.quantity input');

const priceValue =parseFloat((price.innerText))
const quantityValue = quantity.valueAsNumber;

const subtotal = (priceValue*quantityValue)

const subtotalElement = product.querySelector('.subtotal span');

subtotalElement.innerText = subtotal.toFixed(2);

return subtotal
}

function calculateAll() {


  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.getElementsByClassName('.product')

  let totalValue = 0;

for(let product of products){
  totalValue +=updateSubtotal(product)
}

document.querySelector('#total-value span').innerText = totalValue;

  // ITERATION 3
  //... your code goes here
} */
