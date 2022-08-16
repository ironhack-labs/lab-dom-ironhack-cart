// ITERATION 1

//const { product } = require("puppeteer");//

function updateSubtotal(product) {
  const prices = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const price = parseFloat(prices.innerText);
  const quantity1 = Number(quantity.value); 
  
  let singleProduct = price * quantity1
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = singleProduct;

  return singleProduct
}

function calculateAll(product) {
  let total = 0
  const moreProducts = document.getElementsByClassName('product');
  for (let product of moreProducts) {
    total += updateSubtotal(product)
  };

  document.querySelector('#total-value span').innerText = total;
  return moreProducts
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  return removeProduct
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.getElementsByClassName('.btn btn-remove');
    removeButtons.addEventListener('click', removeProduct); //this doesn't work//
  }
);