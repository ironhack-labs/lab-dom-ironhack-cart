// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.value = quantity * price;

  return Number(
    (product.querySelector('.subtotal span').textContent = subtotal.value)
  );
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let totalPrice = 0;

  allProducts.forEach((elem) => {
    updateSubtotal(elem);
    totalPrice += updateSubtotal(elem);
  });

  return (document.querySelector('#total-value span').textContent = totalPrice);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  let tableBody = document.querySelector('tbody');
  let tableRow = target.parentNode.parentNode;

  tableBody.removeChild(tableRow);
  if (!tableRow.lenght) {
    document.querySelector('#total-value span').textContent = 0;
  }
  calculateAll();
}

// ITERATION 5
function createProduct() {
  let body = document.querySelector('tbody');
  const newProduct = document.querySelector('.create-product');
  let newName = newProduct.getElementsByTagName('input')[0].value;
  let newPrice = newProduct.getElementsByTagName('input')[1].value;

  let newLine = document.createElement('tr');
  newLine.classList.add('product');
  let tdName = document.createElement('td');
  tdName.classList.add('name');
  let nameSpan = document.createElement('span');
  nameSpan.textContent = newName;
  tdName.appendChild(nameSpan);

  let tdPrice = document.createElement('td');
  tdPrice.classList.add('price');
  tdPrice.textContent = '$';
  let priceSpan = document.createElement('span');
  priceSpan.textContent = newPrice;
  tdPrice.appendChild(priceSpan);

  let tdQuantity = document.createElement('td');
  tdQuantity.classList.add('quantity');
  let quantityInput = document.createElement('input');
  quantityInput.setAttribute('type', 'number');
  quantityInput.setAttribute('value', '0');
  quantityInput.setAttribute('min', '0');
  quantityInput.setAttribute('placeholder', 'Quantity');
  tdQuantity.appendChild(quantityInput);

  let tdSubtotal = document.createElement('td');
  tdSubtotal.classList.add('subtotal');
  tdSubtotal.textContent = '$';
  let subtotalSpan = document.createElement('span');
  subtotalSpan.textContent = '0';
  tdSubtotal.appendChild(subtotalSpan);

  let tdAction = document.createElement('td');
  tdAction.classList.add('action');
  let actionBtn = document.createElement('button');
  actionBtn.textContent = 'Remove';
  actionBtn.classList.add('btn', 'btn-remove');
  actionBtn.addEventListener('click', removeProduct);
  tdAction.appendChild(actionBtn);

  newLine.appendChild(tdName);
  newLine.appendChild(tdPrice);
  newLine.appendChild(tdQuantity);
  newLine.appendChild(tdSubtotal);
  newLine.appendChild(tdAction);

  body.appendChild(newLine);
  newProduct.getElementsByTagName('input')[0].value = '';
  newProduct.getElementsByTagName('input')[1].value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //remove products
  let removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach((elem) => {
    elem.addEventListener('click', removeProduct);
  });

  //create products
  let addBtn = document.querySelector('#create');
  addBtn.addEventListener('click', createProduct);
});
