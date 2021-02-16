function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let newSubtotal = product.querySelector('.subtotal span');
  newSubtotal.textContent = price.textContent * quantity.value;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  // pour chaque produit, appeler updateSubtotal
  document.querySelectorAll('.product').forEach(updateSubtotal);

  // ITERATION 3
  //... your code goes here
  let sumOfSubtotals = 0;
  document.querySelectorAll('.subtotal span').forEach(currentSubtotal => {
    sumOfSubtotals += parseFloat(currentSubtotal.textContent);
  }); 
  document.querySelector('#total-value span').innerHTML =sumOfSubtotals;
}


// ITERATION 4

function removeProduct(event) {
  //... your code goes here
}
// ITERATION 5
function createProduct() {
  //... your code goes here
}
  //... your code goes here
});
