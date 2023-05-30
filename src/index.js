// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  let subTotal = Number(product.querySelector('.price span').innerText) * Number(product.querySelector('.quantity input').value)
  product.querySelector(".subtotal span").innerText = subTotal
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product')
  const allProductsArray = [...allProducts]
  let cartTotal = 0
  allProductsArray.forEach((elem) => {
    cartTotal += updateSubtotal(elem)
  })

  // ITERATION 3
  document.querySelector('#total-value span').innerText = cartTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target)
  target.parentNode.parentNode.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const newPrice = Number(document.querySelector('.create-product #newPrice').value)
  const newName = document.querySelector('.create-product #newName').value

  let clonedProduct = document.querySelector('.product').cloneNode(true)
  clonedProduct.querySelector('.name span').innerText = newName
  clonedProduct.querySelector('.price span').innerText = newPrice
  clonedProduct.querySelector('.quantity input').value = 0
  clonedProduct.querySelector('.subtotal span').innerText = 0
  document.querySelector('tbody').appendChild(clonedProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveButtons = document.getElementsByClassName('btn btn-remove')
  const allRemoveButtonsArray = [...allRemoveButtons]
  allRemoveButtonsArray.forEach((elem) => {
    elem.addEventListener('click', removeProduct)
  })

  document.querySelector('#create').addEventListener('click', createProduct)
})


