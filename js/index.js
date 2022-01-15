// ITERATION 1



function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const priceValue = price.textContent

  const quantityValue = quantity.value

  const subtotalValue = priceValue * quantityValue

  const subtotalInput = product.querySelector('.subtotal span')

  subtotalInput.innerHTML = subtotalValue

  return subtotalValue
}

function calculateAll() {

  // ITERATION 2

  const products = document.querySelectorAll('.product')

  let sum = 0
  products.forEach(function (eachProduct) {
    updateSubtotal(eachProduct)
    sum += updateSubtotal(eachProduct)
  })


  // ITERATION 3

  let totalPrice = document.querySelector("#total-value span")
  totalPrice.innerHTML = sum

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
