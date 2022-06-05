// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here


  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').value

  let total = price * quantity

  product.querySelector('.subtotal span').innerHTML = total
  return total

}


function calculateAll(product) {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed.at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let totalValue = 0
  const products = document.querySelectorAll('.product')

  products.forEach(product => {
    totalValue += updateSubtotal(product)
  })
  // ITERATION 3
  //... your code goes here

  document.querySelector('#total-value span').innerHTML = totalValue

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
