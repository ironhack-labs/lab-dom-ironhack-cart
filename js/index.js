// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector( '.subtotal span')
  
  subtotal.innerHTML = price.innerHTML * quantity.value;
  return subtotal.innerHTML;
  
  

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    totalPrice += Number(updateSubtotal(allProducts[i]));
  }

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span');
  total.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

const removed = document.getElementsByClassName('btn-remove');
for( let i = 0; i < removed.length; i++){
  removed[i].addEventListener('click', removeProduct);
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
