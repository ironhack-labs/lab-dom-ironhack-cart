// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = price.innerText * quantity.value;
  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll('.product');
  // products.forEach(product => updateSubtotal(product)); // Calculation of subtotals

  // ITERATION 3
  let total = 0;
  products.forEach(product => total += updateSubtotal(product)); // Calculations of total & subs
  document.querySelector(`#total-value span`).innerText(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const parentTarget = target.parentNode.parentNode;  // to access 
  parentTarget.parentNode.removeChild(target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('btn-remove');
  removeBtns.forEach(btn => btn.addEventListener('click', removeProduct()));

  //... your code goes here
});
