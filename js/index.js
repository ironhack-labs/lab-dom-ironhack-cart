// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotalAmount = price.innerHTML * quantity.value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalAmount;
  return subtotalAmount;
}

// ITERATION 2 & 3

function calculateAll() {
  let productList = document.querySelectorAll('.product');
  let totalValue = document.querySelector('#total-value span');
  const totalAmount = [];
  productList.forEach((product) => {
    updateSubtotal(product);
    totalAmount.push(updateSubtotal(product));
  });
  totalValue.innerHTML = totalAmount.reduce((sum, subtotal) => {
    return sum + subtotal;
  }, 0);
}

// ITERATION 4

function removeProduct(event, callback) {
  if (event.parentNode.parentNode) {
    event.parentNode.parentNode.remove();
    callback();
  }
}

// ITERATION 5

function createProduct() {
  let newProductName = document.querySelector(
    '.create-product td input[type="text"]'
  ).value;
  let newProductPrice = document.querySelector(
    '.create-product td input[type="number"]'
  ).value;
  let productTable = document.querySelector('#cart tbody');
  function setAttributes(el, atts) {
    Object.keys(atts).forEach((key) => el.setAttribute(key, atts[key]));
  }

  let trTag = document.createElement('tr');
  trTag.setAttribute('class', 'product');
  let tdName = document.createElement('td');
  tdName.setAttribute('class', 'name');
  let spanName = document.createElement('span');
  spanName.innerHTML = newProductName;
  let tdPrice = document.createElement('td');
  tdPrice.setAttribute('class', 'price');
  tdPrice.innerText = '$';
  let spanPrice = document.createElement('span');
  spanPrice.innerHTML = parseFloat(`${newProductPrice}.00`).toFixed(2);
  let tdQuantity = document.createElement('td');
  tdQuantity.setAttribute('class', 'quantity');
  let inputQuantity = document.createElement('input');
  setAttributes(inputQuantity, {
    type: 'number',
    value: '0',
    min: '0',
    placeholder: 'Quantity'
  });
  let tdSubtotal = document.createElement('td');
  tdSubtotal.setAttribute('class', 'subtotal');
  tdSubtotal.innerText = '$';
  let spanSubtotal = document.createElement('span');
  spanSubtotal.innerHTML = '0';
  let tdAction = document.createElement('td');
  tdAction.setAttribute('class', 'action');
  let removeBtn = document.createElement('button');
  removeBtn.setAttribute('class', 'btn btn-remove');
  removeBtn.innerText = 'Remove';

  productTable.appendChild(trTag);
  trTag.appendChild(tdName);
  tdName.appendChild(spanName);
  trTag.appendChild(tdPrice);
  tdPrice.appendChild(spanPrice);
  trTag.appendChild(tdQuantity);
  tdQuantity.appendChild(inputQuantity);
  trTag.appendChild(tdSubtotal);
  tdSubtotal.appendChild(spanSubtotal);
  trTag.appendChild(tdAction);
  tdAction.appendChild(removeBtn);

  removeBtn.addEventListener('click', () =>
    removeProduct(removeBtn, calculateAll)
  );

  document.querySelector('.create-product td input[type="text"]').value = '';
  document.querySelector('.create-product td input[type="number"]').value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeItemsBtn = document.querySelectorAll('.btn-remove');
  removeItemsBtn.forEach((productRow) => {
    productRow.addEventListener('click', () =>
      removeProduct(productRow, calculateAll)
    );
  });
  const addItemsBtn = document.getElementById('create');
  addItemsBtn.addEventListener('click', () => createProduct());
});
