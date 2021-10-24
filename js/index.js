// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const sTotal = price * quantity; 

  product.querySelector('.subtotal span').innerHTML = sTotal;

  return sTotal;

  console.log(price, quantity, sTotal);
  console.log(product.querySelector('.subtotal span').innerHTML);


  //... your code goes here
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  
  // const prices = document.getElementsByClassName('.price span').innerHTML;
  // const quantities = document.getElementsByClassName('.quantity input').value;

  const products = document.getElementsByClassName('product');
  let grandTotal = 0; 
  
  for (i = 0; i < products.length; i++){ 

    let tempTotal = updateSubtotal(products[i]);

    grandTotal += tempTotal;

  };
    
  document.querySelector('#total-value span').innerHTML = grandTotal;

  return grandTotal;

    console.log(grandTotal);
    

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
