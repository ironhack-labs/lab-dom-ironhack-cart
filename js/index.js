function updateSubtotal(product) {
  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = price * quantity;
  return (price * quantity);
}

function calculateAll() {
  let total = 0;
  let totalValue = document.querySelector('#total-value span');
  const products = document.getElementsByClassName('product');
  for (const product of products)
    total += updateSubtotal(product);
  totalValue.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode;
  document.querySelector('tbody').removeChild(parent.parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (const btn of removeBtns){
    btn.addEventListener('click', removeProduct);
  }
});
