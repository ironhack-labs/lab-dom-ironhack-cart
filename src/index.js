// ITERATION 1

function updateSubtotal(product) {

  const price = document.querySelector('.price span').textContent;
  const quantity = document.querySelector('.quantity input').value;
  const currentTotal = price * quantity;
  let subtotal = document.querySelector('.subtotal span');
  subtotal.innerText = currentTotal;
  console.log(subtotal.innerText);
  return subtotal.innerText;
  
}

function calculateAll(product) {
  const products = document.querySelectorAll('.product .subtotal span');

  for (let i = 0; i < products.length; i++) {
    console.log(products[i].innerText);
  }
  
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
