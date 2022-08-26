// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price  span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  console.log(price);
  console.log(quantity);
  let totalValue = price * quantity;
  console.log(totalValue);
  let sub = product.querySelector('.subtotal span');
  console.log(sub);
  sub.innerHTML = totalValue;
  return totalValue;
}

function calculateAll() {
  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
let totalS = 0;
  // ITERATION 2
  const products = document.querySelectorAll('.product');
  for (let i = 0; i < products.length; i++){
  totalS += updateSubtotal(products[i]);
  };
  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = totalS;
  return total;
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
