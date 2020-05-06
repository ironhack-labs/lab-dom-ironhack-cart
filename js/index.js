// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');

  let price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseInt(product.querySelector('.quantity input').value);
  let value = price * quantity;

  
 product.querySelector('.subtotal span').innerHTML = value;
  subtotal = value;

  return value;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  
  const products = document.querySelectorAll('.product');
  let totalGeneral = 0;
  for (let i =0; i< products.length; i++){
    let subtotal =  updateSubtotal(products[i])
    totalGeneral = totalGeneral + subtotal;
  };

  let elementosTotal = document.querySelector('#total-value span')
  elementosTotal.innerHTML = totalGeneral;
  //[...singleProduct].map(el => { return updateSubtotal(el);})
  
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
// let total = singleProduct.querySelectorAll('.subtotal span').innerHTML;




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
