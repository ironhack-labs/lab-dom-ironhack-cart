// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  let price = product.querySelector ('.price span');
  let quantity = product.querySelector('.quantity input');

  let total = price.innerHTML * quantity.value;

  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = total.toString();
  return total;
  
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  
  let totalProducts = document.getElementsByClassName('product');
  
  let pricesTotal = 0;

  for(i=0;i<totalProducts.length;i++){
    pricesTotal += updateSubtotal(totalProducts[i])
  };

  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span');
  total.innerHTML = pricesTotal
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
