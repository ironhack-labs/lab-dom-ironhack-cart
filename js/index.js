// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  let priceNumber = price.innerHTML
  let quantityValue = quantity.value

  let subtotalValue = priceNumber * quantityValue

  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = subtotalValue

  return subtotalValue
}

function calculateAll() {

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);


  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll('.product')
  let totalValue = 0
  for (let i = 0; i < products.length; i++){
    totalValue += updateSubtotal(products[i])
  }

  // ITERATION 3
  //... your code goes here

  let total = document.querySelector('#total-value span')
  total.innerHTML = totalValue
  return totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove')
  for (let i = 0; i < removeButtons.length; i++){
    removeButtons[i].addEventListener('click', removeProduct)
  }
});
