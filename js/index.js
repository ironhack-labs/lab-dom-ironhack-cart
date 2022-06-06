// ITERATION 1


function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const priceElement = parseFloat(price.innerText)

  const quantity = product.querySelector('.i').value
  let quantityElement = quantity

  let subTotal = product.querySelector('.subtotal span')
  let subTotalPrice = priceElement * quantityElement
  subTotal.innerText = subTotalPrice

}

function calculateAll() {

  const firstProduct = document.querySelector('.rubber')
  const secondProduct = document.querySelector('.beach')

  updateSubtotal(firstProduct)
  updateSubtotal(secondProduct)

  let subTotalPrice = document.querySelectorAll('.subtotal span')

  subTotalPrice.forEach((i) => {
    let allSubTotalPrice = subTotalPrice[i]
    let totalPrice = document.querySelector('.total-value span')
    totalPrice.innerText = allSubTotalPrice

  })
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target)

  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  const removeElement = document.getElementById('remove')
  removeElement.addEventListener('click', removeProduct)


})
