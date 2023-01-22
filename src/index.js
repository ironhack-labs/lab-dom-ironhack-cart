// ITERATION 1

function updateSubtotal(product) {

  //console.log('Calculating subtotal, yey!')

  //... your code goes here
  const price = product.querySelector('.price span')

  const quantity = product.querySelector('.quantity input')

  const newSubtotal = price.innerText * quantity.value

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = newSubtotal

  return newSubtotal
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product')
  //updateSubtotal(singleProduct)
  // end of test


  // ITERATION 2
  //... your code goes here

  let newTotal = 0

  document.querySelectorAll('.product').forEach(eachProduct => {
    newTotal += updateSubtotal(eachProduct)
  })



  // ITERATION 3
  //... your code goes here

  const total = document.querySelector('#total-value span')
  total.innerText = newTotal

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  //... your code goes here


}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  //... your code goes here
})
