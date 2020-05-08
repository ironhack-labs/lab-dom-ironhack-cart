// ITERATION 1

function updateSubtotal(product) {
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
  });

  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  const priceProduct = parseFloat(price.innerHTML);
  let quantityProduct = parseFloat(quantity.value);
  if (typeof quantityProduct !== 'number' || quantityProduct < 0){
    alert('Enter a valid quanity');
  }else {
    let subtotalPrice = +(priceProduct*quantityProduct).toFixed(2);
    let subtotal = product.querySelector('.subtotal span');
    subtotal.innerHTML = subtotalPrice;
    console.log('Calculating subtotal, yey!');
    return subtotalPrice;
  }
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  let total = 0;
  const products = document.querySelectorAll('.product');
  for (let i=0; i<products.length; i++){
    let subtot = updateSubtotal(products[i]);
    total += subtot;
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = total;
}

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
