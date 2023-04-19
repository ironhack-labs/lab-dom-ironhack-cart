// ITERATION 1

function updateSubtotal(product) {
 

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity
  const returnSubtotal = product.querySelector('.subtotal span')
  returnSubtotal.innerHTML = subTotal
  return subTotal
    
    console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  const products = document.getElementsByClassName('product');

  for(let i=0;i < products.length; i++){
    updateSubtotal(products[i]);
  }
  
}
  

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  console.log('The target in remove is:', target);
  
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
