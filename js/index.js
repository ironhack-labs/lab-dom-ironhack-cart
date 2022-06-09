// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = Number(price) * Number(quantity);
  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.textContent = subtotal

  return subtotal
}

 // ITERATION 2 & ITERATION 3
function calculateAll() {
const trProducts = document.getElementsByClassName('product');
let sum = 0;
for(product of trProducts) {
  sum += updateSubtotal(product);
  }
document.querySelector('#total-value span').innerText = sum
}

// ITERATION 4

window.addEventListener('load', () => {
  const allRemoveBtns = document.querySelectorAll('.btn-remove');
  for(btns of allRemoveBtns) {
  btns.addEventListener('click', removeProduct);
} 
});

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentElement.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

