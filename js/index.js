// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const priceValue = price.textContent

  const quantity = product.querySelector('.quantity input');
  const quantityValue = quantity.value

  let subtotalPrice = priceValue * quantityValue

  const subtotal = product.querySelector('.subtotal span')

  subtotal.textContent = subtotalPrice

}

function calculateAll() {

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  updateSubtotal(allProducts[0])
  updateSubtotal(allProducts[1])

  // ITERATION 3
  const totalPrice = product.querySelectorAll('.subtotal span');

  const totalDisplay = 
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
