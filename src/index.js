// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').innerHTML;
  const quantity = +product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  return subtotal;
}

  // ITERATION 2 & 3

  function calculateAll() {
    const allProducts = document.getElementsByClassName('product');
    let total = 0;
    for (let i = 0; i < allProducts.length; i++) {
      const product = allProducts[i];
      const subtotal = updateSubtotal(product);
      total += subtotal;
    }
    document.querySelector('#total-value span').innerHTML = total;
  }

// ITERATION 4

function removeProduct(event) {
  const removeBtn = event.currentTarget;
  const productRow = removeBtn.parentNode.parentNode;
  productRow.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productNameInput = document.querySelector('.create-product input[type="text"]');
  const productName = productNameInput.value;
  const productPriceInput = document.querySelector('.create-product input[type="number"]');
  const productPrice = +productPriceInput.value;

  const table = document.getElementById('cart');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  const nameCell = document.createElement('td');
  nameCell.classList.add('name');
  nameCell.innerText = productName;
  newRow.appendChild(nameCell);

  const priceCell = document.createElement('td');
  priceCell.classList.add('price');
  priceCell.innerHTML = '$<span>' + productPrice.toFixed(2) + '</span>';
  newRow.appendChild(priceCell);

  const quantityCell = document.createElement('td');
  quantityCell.classList.add('quantity');
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.min = '0';
  quantityInput.value = '0';
  quantityCell.appendChild(quantityInput);
  newRow.appendChild(quantityCell);

  const subtotalCell = document.createElement('td');
  subtotalCell.classList.add('subtotal');
  subtotalCell.innerHTML = '$<span>0.00</span>';
  newRow.appendChild(subtotalCell);

  const removeCell = document.createElement('td');
  removeCell.classList.add('action');
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('btn', 'btn-remove');
  removeBtn.innerText = 'Remove';
  removeCell.appendChild(removeBtn);
  newRow.appendChild(removeCell);

  table.appendChild(newRow);

  productNameInput.value = '';
  productPriceInput.value = '';

  const newRemoveBtn = newRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);

  const newQuantityInput = newRow.querySelector('.quantity input');
  newQuantityInput.addEventListener('input', () => {
    updateSubtotal(newRow);
    calculateAll();
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});