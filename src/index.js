// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;

  let subtotalField = product.querySelector('.subtotal span');
  let subtotal = (price*quantity);

  subtotalField.innerHTML = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {

  // ITERATION 2

  let productsArray =  document.getElementsByClassName('product');

  let total = 0;
  for (i=0; i<productsArray.length; i++) {
    let productI = updateSubtotal(productsArray[i]);
    total += productI;
  }

  // ITERATION 3
  let totalField = document.querySelector('#total-value');
  totalField.innerHTML = "$" + total.toFixed(2);
  
  return total;
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let removeBtns = product.querySelector('.btn-remove');
  for (i=0; i<removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct(event));
  }
  
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


