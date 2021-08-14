// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // ITERATION 2

  const elements = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    total += updateSubtotal(elements[i]);
  }

  // ITERATION 3
  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const toRemove = target.parentNode.parentNode;

  // Deletes the product
  if (toRemove.parentNode) {
    toRemove.parentNode.removeChild(toRemove);
  }

  //Updates the total substracting the subtotal of the removed product
  let totalElement = document.querySelector('#total-value span');
  const subtotalElement = toRemove.querySelector('.subtotal span');
  const newTotal = totalElement.innerHTML - subtotalElement.innerHTML;

  totalElement.innerHTML = newTotal;
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeProductBtns.length; i++) {
    removeProductBtns[i].addEventListener('click', removeProduct);
  }
});
