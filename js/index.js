// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  const quantityValue = quantity.value
  const priceValue = price.innerHTML
  const result = quantityValue * priceValue
  subtotal.innerHTML = result
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  const products = document.querySelectorAll('.product')
  products.forEach(eachProduct => {
    updateSubtotal(eachProduct)
  })



  // ITERATION 3
  let sum = 0
  const subtotals = document.querySelectorAll('.subtotal span')
  console.log(subtotals)
  subtotals.forEach(eachSubtotal => {
    sum += parseInt(eachSubtotal.textContent)
  })
  const total = document.querySelector('#total-value')
  total.innerHTML = `Total $${sum}`
}

// ITERATION 4

function removeProduct(event) {
  const removeButtons = event.document.querySelectorAll('.btn btn-remove');
  removeButtons.forEach(eachRemoveButton => {
    eachRemoveButton.onclick = (item) => {
      const ironhackItem = document.querySelectorAll('.product')
      ironhackItem.forEach(eachItem => {
        eachItem.remove
      })

    }
  })
  console.log('The target in remove is:', target);

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
