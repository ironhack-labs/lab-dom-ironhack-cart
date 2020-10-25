// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  let result = price * quantity

  const subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = result

  return result

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const products = document.querySelectorAll('.product')

  let sum = 0

  products.forEach(element => {
    sum += updateSubtotal(element)
  });


  // ITERATION 3
  //... your code goes here

  const total = document.querySelector('#total-value span')
  
  total.innerHTML = sum


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const action = target.parentNode
  const row = action.parentNode
  const table = row.parentNode

  table.removeChild(line)

  calculateAll()

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtn = document.querySelectorAll('.btn-remove')
  removeBtn.forEach(element => {
    element.addEventListener('click', removeProduct)
  }
  )
  

  //... your code goes here
});


