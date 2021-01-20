// ITERATION 1


function updateSubtotal(product) {
  
const price = product.querySelector('.price span ').textContent;
//total 
const subtotal = product.querySelector('.subtotal span ');
//Menge
const quantity = product.querySelector('input').value;

const subtotalPrice = price*quantity;

// change textContent from subtotal 
subtotal.textContent = subtotalPrice

return subtotalPrice;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}


console.log(calculateAll());
// ITERATION 4



function removeProduct(e) {
  const target = e.currentTarget;

  //... your code goes here */ 


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
