// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').value
  const multiplyPricePerQuantity = price.innerHTML * quantity
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = multiplyPricePerQuantity




  // console.log('Calculating subtotal, yey!');

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
  products.forEach(product => updateSubtotal(product))

  // ITERATION 3
  //... your code goes here
  const subtotals = document.querySelectorAll('.subtotal span')
  const totalElm = document.querySelector('#total-value span')
  let total = 0
  subtotals.forEach(sub => {
    const totalPrice = parseFloat(sub.innerHTML)
    total += totalPrice
  })
  totalElm.innerHTML = total
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

const loadButtons = () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
 
  //... your code goes here
}

window.addEventListener('load', loadButtons);















