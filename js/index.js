let priceSelector = document.querySelector('.price span');
let quantitySelector = document.querySelector('.quantity input');
let subTotalSelector = document.querySelector('.subtotal span');
let productSelection = document.getElementsByClassName('product');

// ITERATION 1

function updateSubtotal(product) {
  let price = Number(priceSelector.innerHTML);
  let quantity = Number(quantitySelector.value);

  let subTotal = price*quantity;
  subTotalSelector.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');

  
  // end of test

  // ITERATION 2
  let arrProducts = [...productSelection];
  arrProducts.map(product => {
    updateSubtotal(product);
  })

  // ITERATION 3
  //... your code goes here
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
