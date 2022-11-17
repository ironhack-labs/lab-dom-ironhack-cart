// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!'); 

  const priceInput = product.querySelector('.price span').innerHTML;
  const quantityInput = product.querySelector('.quantity input').value;
  const subtotal = priceInput * quantityInput;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal;
  return subtotal;


console.log(+priceInput)
console.log(+quantityInput)
console.log(subtotal)

}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  

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
