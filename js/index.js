
// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subTotal;
  return subTotal;
}


function calculateAll() {
  // ITERATION 2
  var sum = 0;
  
  const products = document.getElementsByClassName('product');
  Array.from(products).forEach(product => sum += updateSubtotal(product));
  
  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = sum;
}

// BONUS

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parentEle = target.closest('.product');
  parentEle.parentNode.removeChild(parentEle);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  Array.from(removeButtons).forEach(button => button.addEventListener('click', removeProduct));

  //... your code goes here
});