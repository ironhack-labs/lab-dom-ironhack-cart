// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  // Select the target and get the info
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')

  // Calculate subtotal price value
  const subtotalValue = price * quantity

  // Change subtotal value of the element
  subtotal.innerHTML = subtotalValue

  return subtotalValue

}

function calculateAll() {

  // ITERATION 2 AND 3

  const allProducts = document.querySelectorAll('.product')

  let subtotalSum = 0
  
  // Calculate the sum of subtotal product values
  allProducts.forEach(element => subtotalSum += updateSubtotal(element))

  const totalValueCart = document.querySelector('#total-value span')

  totalValueCart.innerText = subtotalSum

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
