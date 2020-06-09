// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceElem = product.querySelector('.price span').innerHTML;
 
  const quantElem = product.querySelector(".quantity input").value;

  let subTotal = priceElem * quantElem;

  const subElem = product.querySelector('.subtotal span');
  
  return subElem.innerHTML = subTotal;
  
}

function calculateAll() {
   //const singleProduct = document.querySelector('.product');
   //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProduct = document.getElementsByClassName('product');
  const totalSum = [...allProduct].map(node => updateSubtotal(node)).reduce((acc, cv) => acc + cv);
  
  console.log(totalSum);
  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.innerHTML = totalSum;
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
