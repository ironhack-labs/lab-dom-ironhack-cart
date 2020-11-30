// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  //console.log (`Hola ${price}`)

  const subtotal = price * quantity
  console.log(subtotal)
  
  const subtotalDOM = product.querySelector('.subtotal span')
  console.log(subtotalDOM)
  
  subtotalDOM.innerHTML = subtotal

  return subtotal

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
 
 const products = document.querySelectorAll ('.product')
  //console.log (products)
 let sum = 0 
 products.forEach(element => {
   sum += updateSubtotal(element)
 }); 
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span')
  //console.log(total)
  total.innerHTML = sum
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
