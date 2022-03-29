// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText; // copied from Github
  console.log(price);


  let quantity = product.querySelector(' input').value;
  console.log(typeof quantity);
  console.log(quantity);

  let subTotalValue = price * quantity;
  (product.querySelector('.subtotal span')).innerText = subTotalValue;

  console.log('Calculating subtotal, yey!');
  return subTotalValue;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
   updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let manyProducts = document.querySelectorAll('.product');
  let newTotal = +'';
  
  //  let subTotals = manyProducts.forEach(pro => subTotals(pro)); // short version
  let subTotals = manyProducts.forEach(function (result1) {
  let total = updateSubtotal(result1)
  newTotal += total
  });

  // ITERATION 3

  document.querySelector('#total-value span').innerText = newTotal;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here‚
  const removeItemBtn = document.getElementById('.btn.btn-remove');
  removeItemBtn.addEventListener('click', removeProduct);
  console.log('hello')
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



