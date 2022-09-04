// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  
  const subtotal = price*quantity;  
  return product.querySelector('.subtotal span').innerText= subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes 
  let result = 0;
  const aux = document.getElementsByClassName('product');

  for (let i = 0; i < aux.length; i++) {
    result += updateSubtotal(aux[i]);
  }

  // ITERATION 3
  //... your code goes here
  return document.querySelector('#total-value span').innerText = result;
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
