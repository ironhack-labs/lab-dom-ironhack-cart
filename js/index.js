// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  const priceDom = product.querySelector('.price span')
  const price = priceDom.innerText
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  const result = price * quantity
  subtotal.innerText = result
  return result
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalValue = 0
  const products = document.querySelectorAll('.product')
  products.forEach((product) => {
    totalValue += updateSubtotal(product)
  })

  // ITERATION 3

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
