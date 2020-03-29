// ITERATION 1


function updateSubtotal($product) {
  let price = $product.querySelector('.price span').innerHTML
  let quantity = $product.querySelector('.quantity input').value
  let subtotal = price * quantity
  $product.querySelector('.subtotal span').innerHTML = subtotal
}

function calculateAll() {
  // For development testing purposes, paste the following code inside of `calculateAll`:
  const $singleProduct = document.querySelector('.product');
  updateSubtotal($singleProduct);
  // End of test

  // ITERATION 2
  let totalProducts = document.querySelectorAll('.product')
  totalProducts.forEach(elm => {
    updateSubtotal(elm)
  })

  // ITERATION 3
  let sum = 0
  let temp = 0
  totalProducts.forEach(elm => {
    temp = parseInt(elm.querySelector('.subtotal span').innerHTML)
    sum += temp
  })
  document.querySelector('#total-value span').innerHTML = Number(sum).toFixed(2)
}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4
totalButtons = document.querySelectorAll('.btn-remove')
let tBody = document.querySelector('tbody')
totalButtons.forEach(elm => {
  elm.addEventListener("click", productRemoveListener)
})

function productRemoveListener(event) {

  let removedNode = event.currentTarget.parentNode
  tBody.removeChild(removedNode.parentNode)

}

// ITERATION 5
let createProd = document.querySelector('#create')
console.log(createProd)
createProd.addEventListener("click", createProduct)

function createProduct(event) {
  let newProductName = document.querySelector('.new-product').value
  let newProductPrice = document.querySelector('.new-price').value
  let newNode = document.querySelector('.product')
  let clone = newNode.cloneNode(true)
  clone.querySelector('.product span').innerHTML = newProductName
  clone.querySelector('.price span').innerHTML = newProductPrice
  tBody.appendChild(clone)
  totalButtons = document.querySelectorAll('.btn-remove')
  totalButtons.forEach(elm => {
    elm.addEventListener("click", productRemoveListener)
  })
}