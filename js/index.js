// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector(' .quantity input').value;

  const subtotalValue = price * quantity;

  const subtotal = product.querySelector('.subtotal');

  subtotal.innerHTML = subtotalValue;

  return subtotalValue;
}

  // ITERATION 2

function calculateAll() {

  let totalValue = 0;
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach( productRow => {
   totalValue += (updateSubtotal (productRow))
  });

  // ITERATION 3

document.querySelector('#total-value span').innerHTML = totalValue;
  


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parent = document.querySelector('.action');
  let child = document.querySelector('.btn-remove');
  let removed = parent.removeChild(child);
  return removed;
 }

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach( button => {
    button.addEventListener('click', removeProduct);
  }); 
});