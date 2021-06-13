// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('input').value
  const subTotal = price * quantity; 
  product.querySelector('.subtotal span').innerText = subTotal
  return subTotal
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  const products = document.getElementsByClassName('product');
  let sumTotal = 0;
  document.querySelectorAll('.product').forEach(function (products) {
    sumTotal += updateSubtotal(products);
  })
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = sumTotal;
  return sumTotal;
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