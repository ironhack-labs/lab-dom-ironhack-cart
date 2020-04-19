// ITERATION 1-2-3

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = parseFloat(product.querySelector('.price span').innerHTML);
  let quantity = parseInt(product.querySelector('.quantity input').value);
  let value = price * quantity;
  product.querySelector('.subtotal span').innerHTML = value;
  return value;
}

function calculateAll() {
  let products = document.querySelectorAll('.product'); // Select all the products
  let totalGeneral = 0;
  [...products].map(prod => totalGeneral += updateSubtotal(prod));
  document.querySelector('#total-value span').innerHTML = totalGeneral;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parentL1 = target.parentNode;
  let parentL2 = parentL1.parentNode;
  parentL2.parentNode.removeChild(parentL2);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let productTable = document.querySelector('tbody');
  let productRow = document.querySelector('tbody tr');
  let newProductRow = productRow.cloneNode(true);
  newProductRow.querySelector('.quantity input').value = 0;
  newProductRow.querySelector('.subtotal span').innerHTML = 0;
  productTable.appendChild(newProductRow);

  let newProductName = document.querySelector('.create-product td input[type=text]').value;
  let newProductPrice = document.querySelector('.create-product td input[type=number]').value;
  newProductRow.querySelector('.name span').innerHTML = newProductName;
  newProductRow.querySelector('.price span').innerHTML = newProductPrice;

  let removeProductBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener('click', removeProduct);
  }

  let emptyName = document.querySelector('.create-product input[type=text]');
  emptyName.value = '';
  let emptyPrice = document.querySelector('.create-product input[type=number]');
  emptyPrice.value = "0";
}

window.addEventListener('load', () => {
  let calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeBtn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }
  let addProduct = document.getElementById('create');
  addProduct.addEventListener('click', createProduct);
});