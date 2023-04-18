// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  let produto = price.innerHTML * quantity.value;

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = produto;

  return produto;
  
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');  
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName('product')
  
  let totalValue = 0;

  for (let i = 0; i< products.length; i++){
    totalValue += updateSubtotal(products[i])
  };
  
  
  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove()
   
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttonRemove = document.getElementsByClassName('btn-remove')
  for ( let i = 0; i < buttonRemove.length; i++){
    buttonRemove[i].addEventListener('click', removeProduct)
  }
});
