// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector(".quantity input")
  const subtotalInput = product.querySelector(" .subtotal span")

  const subtotal = price.innerHTML * quantity.value
  subtotalInput.innerHTML = subtotal

  return subtotal

}

function calculateAll() {

  // ITERATION 2

  const totalProducts = document.querySelectorAll(".product")
  let sumTotal = 0

  totalProducts.forEach(function (elm) {
    sumTotal += updateSubtotal(elm)
  })

  // ITERATION 3
  
  const total = document.querySelector("#total-value span")
  total.innerHTML = sumTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove()
  
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const buttons = document.querySelectorAll(".btn-remove")
  buttons.forEach(function (elm) {
    elm.addEventListener('click', removeProduct)
  })
});
