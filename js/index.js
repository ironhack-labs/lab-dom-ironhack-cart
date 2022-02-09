// ITERATION 1, 2 & 3

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = price.innerText * quantity.value; 
  return +(price.innerText * quantity.value);
}

function calculateAll() {
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct); 
  const allTheProducts = document.getElementsByClassName('.product');
  let totalPrice = document.querySelector('#total-value span');

  const sumOfTheCart = 0;
  const ArrayWithAllTheProducts = [...allTheProducts];

  ArrayWithAllTheProducts.forEach((product) => (sum += updateSubtotal(product)));

  totalPrice.innerText = sumOfTheCart;
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
