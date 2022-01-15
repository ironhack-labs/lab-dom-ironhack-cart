// ITERATION 1

function updateSubtotal(product) {
  //alert('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = price.innerHTML;
  const quantityValue= quantity.value;

  const subTotal=priceValue*quantityValue;
  const subTotalEl = product.querySelector('.subtotal span');

  subTotalEl.innerHTML=subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');

  let sumSubTotal = 0;

  for (let i=0; i<products.length; i++) {
    sumSubTotal += updateSubtotal(products[i]);
  }

  // ITERATION 3
  //... your code goes here
  const totalEl = document.querySelector('#total-value span');  
  totalEl.innerHTML=sumSubTotal;
  

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
