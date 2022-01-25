// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
   const subTprice = price.innerHTML * quantity.value;
   const subtotal = product.querySelector('.subtotal span');
   console.log('Calculating subtotal, yey!');
   subtotal.innerHTML = subTprice;
   return subTprice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  const allProduct = document.getElementsByClassName('product')
  let singleSubTotal = 0;
  for (i = 0; i < allProduct.length; i++) {
    singleSubTotal += updateSubtotal(allProduct[i]);
  }
  console.log(singleSubTotal)
  // ITERATION 3
  const total = document.querySelector('#total-value span');
  let finalTotal = 0;
  for (j = 0; j < singleSubTotal; j++) {
    finalTotal = singleSubTotal;
    total.innerHTML = finalTotal;
  }
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
