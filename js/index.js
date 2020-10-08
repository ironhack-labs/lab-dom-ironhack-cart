// ITERATION 1

function updateSubtotal(product) {
  //alert('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal.toString();
  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach((product) => {
    let subtotal = updateSubtotal(product);
    total += subtotal;
  });
  document.querySelector('#total-value span').textContent = total.toString();
  return total;
}

// ITERATION 4
const removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach((button) => button.addEventListener('click', removeProduct));

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //const parentBox = target.parentNode.parentNode;
  const parentBox = target.closest('.product');
  parentBox.parentNode.removeChild(parentBox);
  calculateAll();
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
