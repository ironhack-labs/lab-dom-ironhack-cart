// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const numOnSpan = product.querySelector('.price span')
  const price = numOnSpan.textContent
  const numOnInput = product.querySelector('.quantity input')
  const quantity = numOnInput.value

  const subTotaloperation = quantity * price

  const holdSubtotal = product.querySelector('.subtotal span')
  holdSubtotal.innerText = subTotaloperation

  // console.log(subTotaloperation, holdSubtotal)

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const allProducts = document.querySelectorAll('.product')

  for (let i = 0; i < allProducts.length; i++) {
    const singleProduct = allProducts[i]
    let allSubtotal = document.querySelector('.subtotal span')
    allSubtotal = updateSubtotal(singleProduct)
  }

  // ITERATION 3
  //... your code goes here

  let allSubtotal = document.querySelectorAll('.subtotal span')
  let total = 0

  for (let i = 0; i < allSubtotal.length; i++) {
    let allSubtotals = parseFloat(allSubtotal[i].innerText)
    total += allSubtotals
  }

  const totalSum = document.querySelector('#total-value span')
  totalSum.innerText = total
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
  const removeButtons = document.querySelectorAll('.action button')

});
