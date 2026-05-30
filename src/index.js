// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElement=product.querySelector('.price span');
  const quantityElement=product.querySelector('.quantity input')

  const price=parseFloat(priceElement.textContent);
  const quantity=parseInt(quantityElement.value);

  const sub=price*quantity;

  const subtotalElement=product.querySelector('.subtotal span');
  subtotalElement.textContent=sub;

  return sub;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products=document.querySelectorAll('.product');
  let total=0;
  products.forEach(product => {
    total+=updateSubtotal(product);
  });

  // ITERATION 3
  let calcBtn=document.getElementById('total-value');
  calcBtn.textContent=total;
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
