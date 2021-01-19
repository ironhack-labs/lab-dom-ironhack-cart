// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML; 
  const quantity = product.querySelector('#cart > tbody > tr > td.quantity > input[type=number]').value;
  console.log(price);
  console.log(quantity);

  const subtotalPrice = price * quantity; 
  console.log(subtotalPrice);
  
  

  let subTotal = product.querySelector('#cart > tbody > tr > td.subtotal> span');
  console.log(subTotal.innerHTML);
  subTotal.innerHTML= subtotalPrice; 
  
  return subTotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct); 
  //get all the products rows
  //for each line call update Subtotal
  
  // end of test

  // ITERATION 2
  //... your code goes here

  const multiProducts = document.querySelector('.product');
  console.log(multiProducts);
  for (let product of multiProducts){
  updateSubtotal(multiProducts);
  }

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
