// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = price * quantity;

  const subtotalElm = product.querySelector('.subtotal span');
  subtotalElm.innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product);
  });
  const totalElm = document.querySelector('#total-value span');
  totalElm.innerText = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const products = document.querySelector('tbody');
  products.removeChild(target.parentNode.parentNode);

  calculateAll();
}

// ITERATION 5

function createProduct(newRow) {
  const newElmName = document.querySelector('#new-name input').value;
  const newElmPrice = document.querySelector('#new-price input').value;
  // 2. add a new row

  const products = document.querySelector('tbody');
  newRow.querySelector('.product span').innerText = newElmName;
  newRow.querySelector('.product .price span').innerText = newElmPrice;
  products.appendChild(newRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const newRow = document.querySelector('.product').cloneNode(true);

  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener('click', (event) => {
      removeProduct(event);
    });
  });

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', () => {
    createProduct(newRow);
  });

  //... your code goes here
});
