// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input').value

  const subTotaltest = product.querySelector('.subtotal span')

  let priceValue = price.innerText

  // create variable for subtotal
  let subtotal = priceValue * quantity;
  subTotaltest.innerText = subtotal;
  return subtotal;

  /* console.log('Calculating subtotal, yey!'); */

  //... your code goes here
}

function calculateAll() {

  // ITERATION 2
  let allProducts = document.getElementsByClassName('product');
  let total = 0;
  
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i])
  };
  
  // ITERATION 3
  //... your code goes here

  let finalTotal = document.querySelector('#total-value span') 
  finalTotal.innerText = total;
  
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
