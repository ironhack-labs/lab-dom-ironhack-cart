// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const total = price.innerText * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = total;
  return total;
}

function calculateAll() {

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  const totalArray = [];
  [...products].forEach(element => {
    totalArray.push(updateSubtotal(element));
  });  

  // ITERATION 3
  const totalValue = document.querySelector('#total-value > span');
  totalValue.innerText = totalArray.reduce((acc,curr) => acc+curr,0);
}

// ITERATION 4

function removeProduct(event) {
  const productToRemove = event.currentTarget.parentNode.parentNode;
  productToRemove.parentNode.removeChild(productToRemove);
  calculateAll();
}

function initializeRemoveBtnEvents() {
  const removeBtnsArray = document.querySelectorAll('.btn-remove');
  [...removeBtnsArray].forEach(element => element.addEventListener('click',removeProduct));
}
// ITERATION 5
const productElementCopy = [];
function createProduct() {

  const newProduct = productElementCopy[0].cloneNode(true);

  setNewProductValues(newProduct);

  addProductToCartTable(newProduct);

}

function addProductToCartTable(newProduct) {
  const cartProducts = document.querySelector('#cart tbody');
  cartProducts.appendChild(newProduct);  
}

function setNewProductValues(newProduct) {

  const productToCreate = document.querySelectorAll('.create-product > td > input');
  const productToCreateArray = [...productToCreate].map(element => element.value);

  //reset input values on create product bar
  productToCreate[0].value = '';
  productToCreate[1].value = '0';

  //We know 1st element is the name and 2nd the price
  newProduct.getElementsByClassName('name')[0].innerText = productToCreateArray[0];
  newProduct.querySelector('.price > span').innerText = Number(productToCreateArray[1]).toFixed(2);
  newProduct.querySelector('.subtotal span').innerText = '0';
  newProduct.querySelector('.quantity input').value = '0';
  newProduct.querySelector('.btn-remove').addEventListener('click',removeProduct);
}

function initializeCreateProductBtn() {
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  initializeRemoveBtnEvents();
  initializeCreateProductBtn();
  
  //cache product element structure
  productElementCopy.push(document.getElementsByClassName("product")[0]);  
});


