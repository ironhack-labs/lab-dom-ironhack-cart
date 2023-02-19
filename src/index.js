// ITERATION 1
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function updateSubtotal(product) {


  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let priceXQuantity = price * quantity;
  console.log(priceXQuantity);
  product.querySelector('.subtotal span').innerHTML = priceXQuantity;
  return priceXQuantity
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const items = document.getElementsByClassName("product");
  const total = document.querySelector("#total-value span");
  let totalValue = 0;
  for (const item of items){
    totalValue += updateSubtotal(item);
 }


  // ITERATION 3
  //... your code goes here
  total.innerHTML = totalValue;
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
