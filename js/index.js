// ITERATION 1

const { product } = require("puppeteer");

function updateSubtotal(product) {
  
  const priceDOM = parseFloat(product.querySelector('.price span').innerText);
  
  const quantityDOM = parseFloat(product.querySelector('.quantity input').value);
  
  const priceTotal = priceDOM.innerHTML * quantityDOM;
 
  product.querySelector('.subtotal span').innerText = priceTotal.toFixed(2);;

  return priceTotal
};

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = Array.from(document.querySelectorAll('.product'));
  const total = products.reduce((total,product) =>{
    return total + updateSubtotal(product)
  },0);
  document.querySelector('#total-value span').innerText= total.toFixed(2);
  
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
