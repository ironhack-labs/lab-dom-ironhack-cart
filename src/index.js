// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span')
  let priceValue = price.innerHTML;
  let quantityValue = quantity.value;
  let subtotalPrice = priceValue*=quantityValue;
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;

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
  const total = document.querySelector('#total-value span')
  let subtotals = []
  products.forEach(element => {
    let subtotal = updateSubtotal(element)
    subtotals.push(subtotal)
  })
  ;

  // ITERATION 3
  //... your code goes here
  total.innerHTML = subtotals.reduce((accumulator, currentValue) => accumulator + currentValue,
  0)

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
