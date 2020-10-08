// ITERATION 1

function updateSubtotal(product) {
  //alert('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').textContent = subtotal;
  return subtotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value span').textContent = total;
  return total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  //const parentBox = target.parentNode.parentNode;
  const parentBox = target.closest('.product');
  parentBox.parentNode.removeChild(parentBox);
  calculateAll();
}

// ITERATION 5
document.querySelector('button#create').addEventListener('click', createProduct);

function createProduct() {
  let addedProductRow = document.createElement('tr');
  addedProductRow.className = "product";
  addedProductRow.innerHTML = document.querySelector('.product').innerHTML;
  const createProductRow = document.querySelector('.create-product');
  let inputProductName = createProductRow.querySelector("input[type='text']").value;
  let inputProductPrice = createProductRow.querySelector("input[type='number']").value;
  addedProductRow.querySelector('.name span').innerHTML = inputProductName;
  addedProductRow.querySelector('.price span').innerHTML = inputProductPrice;
  document.querySelector('tbody').appendChild(addedProductRow);
  addedProductRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
  createProductRow.querySelector("input[type='text']").value = '';
  createProductRow.querySelector("input[type='number']").value = '0';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => button.addEventListener('click', removeProduct));
});
