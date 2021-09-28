// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceElm = Number(price.innerHTML);
  const quantityElm = quantity.value;
  let subtotalElm = priceElm * quantityElm;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalElm;
  return subtotalElm;
  
}

function calculateAll() {
  //ITERATION 2 & 3;
  const products = document.getElementsByClassName('product');
  const productsArr = [...products];
  let subtotal = 0;
  for (let product of productsArr) {
    subtotal += updateSubtotal(product);
  }
  const total = document.querySelector('#total-value span');
  total.innerHTML = subtotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parent = target.parentNode.parentNode.parentNode;
  let product = target.parentNode.parentNode; 
  parent.removeChild(product);
  const total = document.querySelector('#total-value span');
  total.innerHTML -= updateSubtotal(product);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }
  

  //... your code goes here
});
