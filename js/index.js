// ITERATION 1

function updateSubtotal(product) {
  const price = parseInt(product.querySelector('.price span').innerHTML);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  let subtotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  let products = document.getElementsByClassName('product');
  let productArray = [...products];

  let totalValue = 0;

  productArray.forEach((product) => {
    totalValue += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerHTML = totalValue;

  return totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.parentNode.removeChild(
    target.parentNode.parentNode
  );
  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerHTML = calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});
