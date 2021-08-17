// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceElement = price.innerText;
  const quantityElement = quantity.value;

  const subtotal = product.querySelector('.subtotal span');
  const subtotalElement = priceElement * quantityElement;

  subtotal.innerText = subtotalElement;

  return subtotalElement;

}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  
  const multipleProducts = document.querySelectorAll('.product');
  let total = 0;
  for (let product of multipleProducts) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  const totalPriceElement = document.querySelector('#total-value span');
  totalPriceElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is: ', target);
  
  const productElement = target.parentElement.parentElement;
  const tableBodyElement = productElement.parentElement;
  tableBodyElement.removeChild(productElement);
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
