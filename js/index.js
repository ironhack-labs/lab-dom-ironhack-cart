// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  const subTotalNode = product.querySelector('.subtotal span');
  subTotalNode.textContent = subTotal;
  return subTotal; 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  //ITERATION 2
const allProducts = document.querySelectorAll('.product');
const productArray = Array.from(allProducts);
const rowTotals = productArray.map(updateSubtotal);
const sum = rowTotals.reduce(function(acc,currentValue){
  return acc + currentValue
});


  // ITERATION 3
  const total = document.getElementById('total-value');
  const totalAmount = total.querySelector('span');
  totalAmount.textContent = sum;
  
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
