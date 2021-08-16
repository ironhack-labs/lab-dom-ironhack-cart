// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  
  const price = product.querySelector('.price span');

  const quantity = product.querySelector('quantity input');

  const subTotProduct = (price.textContent, quantity.value);
  console.log (price.textContent, quantity.value);

  product.querySelector( ' subtotal').textContent = subTotProduct;

  return subTotProduct;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  // end of test

  // ITERATION 2

  let storeTotal = 0;

  for (let i = 0; function.updateSubtotal(product: any)) number;
  storeTotal += updateSubtotal(prodList[i]);
  console.log (prodList[i]);
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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
