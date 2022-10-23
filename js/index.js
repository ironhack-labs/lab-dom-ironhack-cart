
function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const priceValue = price.innerHTML

  const quantity = product.querySelector('.quantity input')
  const quantityValue = quantity.value

  const subtotal = product.querySelector('.subtotal span')

  const result = priceValue * quantityValue
  subtotal.innerHTML = result
  return result
}

function calculateAll() {

  const products = document.querySelectorAll('.product')

  let total = 0

  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i])
  }
  totalValue = document.querySelector("#total-value span")
  totalValue.innerHTML = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const remove = product.querySelectorAll(".btn btn-remove")
  remove.addEventListener('click')

  for (let i = 0; i < remove.length; i++) {
    removeProduct(remove[i])
  }


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
