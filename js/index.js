// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;

  const quantity = product.querySelector('.quantity input').value;

//  let subtotal = product.querySelector('.subtotal span');
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');

  let total = 0;
  let totalValue = 0;


  for (let i=0; i < allProducts.length; i++) {
    total = updateSubtotal(allProducts[i]);
    totalValue += total; 
  } 

  document.querySelector('#total-value span').innerHTML = totalValue;


  //document.querySelector('.total-value span').innerHTML = totalValue;

  // ITERATION 3
  //... your code goes here
  
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
