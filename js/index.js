// ITERATION 1

//const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent

  const quantity = product.querySelector('.quantity input').value

  const subtotal = price * quantity


  product.querySelector('.subtotal span').textContent = subtotal


  return (subtotal)













  //... your code goes here
}








function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0

  const allProducts = document.querySelectorAll('.product');

  allProducts.forEach(function (item) {

    const price = item.querySelector('.price span').textContent
    const quantity = item.querySelector('.quantity input').value

    const subtotals = price * quantity

    subtotals = item.querySelector('.subtotal span').textContent

    total = subtotals + total



  })

}

















//... your code goes here

// ITERATION 3






//... your code goes here


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
