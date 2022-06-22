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
  let target = event.target;
  console.log('The target to remove is:', target);

  const products = document.querySelector('tbody');
  for (let i = 0; i < 10; i++) {
    target = target.parentNode;
    if (target.matches('.product')) {
      break;
    }
  }
  products.removeChild(target);

  calculateAll();
}

function createProduct(firstRow) {
  const newElmName = document.querySelector('#new-name input').value;
  const newElmPrice = document.querySelector('#new-price input').value;

  const newRow = firstRow.cloneNode(true);
  newRow.querySelector('.product span').innerText = newElmName;
  newRow.querySelector('.product .price span').innerText = newElmPrice;

  const products = document.querySelector('tbody');
  products.appendChild(newRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const firstRow = document.querySelector('.product').cloneNode(true);

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', () => {
    createProduct(firstRow);
  });
});

document.addEventListener('click', function (event) {
  if (event.target && event.target.className == 'btn btn-remove') {
    removeProduct(event);
  }
});
