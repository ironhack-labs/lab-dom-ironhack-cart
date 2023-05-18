// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent; 
  const quantity = product.querySelector('.quantity input').value; 
  const subtotal = price * quantity; 
  product.querySelector('.subtotal span').textContent = subtotal; 
  return subtotal; 
}

// ITERATION 2

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
    // end of test
    const allProducts = document.getElementsByClassName('product'); 
    let total = 0; 
    for (let product of allProducts) {
    total += updateSubtotal(product); 
    }
  document.querySelector('#total-value span').textContent = isNaN(total) ? 0 : total.toFixed(2);
}
  
const calculateBtn = document.getElementById('calculate');
calculateBtn.addEventListener('click', calculateAll);

  // ITERATION 3

  function updateSubtotal(product) {
    const price = product.querySelector('.price span').textContent; 
    const quantity = product.querySelector('.quantity input').value; 
    const subtotal = price * quantity; 
    product.querySelector('.subtotal span').textContent = subtotal;
    
}
  
  


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
  calculateAll();
}
  const removeBtn = document.querySelectorAll('.btn-remove');
  for (let button of removeBtn) {
  button.addEventListener('click', removeProduct);
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
