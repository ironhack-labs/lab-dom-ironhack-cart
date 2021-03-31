// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
  return subtotal;
}
// ITERATION 2
function calculateAll() {
  let cart = document.querySelector('#cart');
  let products = cart.querySelectorAll('.product');
  let total = 0;

  products.forEach((allProduct)=>{
    total += updateSubtotal(allProduct);
  });
  document.querySelector('#total-value span').innerText = total.toFixed(2);
  }

// ITERATION 3
// Our calculation functionality is still incomplete. The subtotal for each product is being updated, but
// the total value remains untouched.
// At the end of the calculateAll() function, reuse the total value you just calculated in the previous
// iteration and update the corresponding DOM element. Calculate the total price for the products in
// your cart by summing all of the subtotals returned by updateSubtotal() when it was called with each product.
// Lastly, display that value on your DOM.
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