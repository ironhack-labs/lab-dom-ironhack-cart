// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').textContent
  let quantity = product.querySelector('.quantity input').value

  let subtotal = price * quantity
  product.querySelector('.subtotal span').textContent = subtotal
  return subtotal

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
  let total = 0
  let products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  // ITERATION 3
  document.getElementById('total-value').getElementsByTagName('span')[0].textContent = total
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
