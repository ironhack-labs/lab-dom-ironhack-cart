// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  let subtotalPrice = price * quantity

  let subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = subtotalPrice

  return subtotalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let products = document.querySelectorAll('.product')
  products.forEach(function (eachProduct) {
    updateSubtotal(eachProduct)
  })


  // ITERATION 3

  let total = document.querySelector('#total-value span')
  // let subtotals = document.querySelectorAll('.subtotal span')

  let sum = 0

  for (let i = 0; i < products.length; i++) {
    sum += updateSubtotal(products[i])
  }

  total.innerHTML = sum

  // let subtotalsValues = ''
  // console.log(subtotalsValues)
  // let totalValue = 0

  // console.log(subtotals)

  // updateSubtotal()

  // console.log(subtotalsValues)


  // subtotalsValues.forEach(function (eachSubtotalValue) {
  //   console.log(eachSubtotalValue)
  //   totalValue += eachSubtotalValue
  // }
  // )
  // console.log(totalValue)

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
