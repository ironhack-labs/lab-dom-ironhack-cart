// ITERATION 1

function updateSubtotal(product) {
const price = product.querySelector('.price span').innerText;
const quantity = product.querySelector('.quantity > input').value;
const subtotalPrice = price * quantity;
product.querySelector('.subtotal span').innerText = subtotalPrice;
return subtotalPrice;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  products.forEach(element => {
    updateSubtotal(element);
  });

  // ITERATION 3
  let totalValue = 0;
  products.forEach(element => {
   totalValue += updateSubtotal(element);});
  let total = document.querySelector('#total-value span');
  total.innerHTML = totalValue;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
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
