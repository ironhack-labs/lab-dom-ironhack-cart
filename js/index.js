// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')

  const sub = product.querySelector('.subtotal span')
  const priceNum = Number(price.innerHTML)
  const quantityNum = Number(quantity.value)
  const mult = priceNum * quantityNum
  sub.innerHTML = mult
  
  }

  //... your code goes here


function calculateAll() {
  const products = document.getElementsByClassName('product')
  subtotal.innerHTML = updateSubtotal(products)
}

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  // ITERATION 2


  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
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
