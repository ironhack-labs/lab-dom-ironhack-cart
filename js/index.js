// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = price.innerHTML * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}

// ITERATION 2 & 3

function calculateAll() {
  let totalPrice = 0;
  const products = document.getElementsByClassName('product');
  productsArr = [...products];
  productsArr.forEach(product => {
    updateSubtotal(product);
    totalPrice += Number(updateSubtotal(product));
  });
  
  let totalDisplayed = document.querySelector('#total-value span');
  totalDisplayed.innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  



  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttons = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < buttons.length, i++) {
    buttons[i].addEventListener('click', removeProduct);
  }
  
});
