// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = Number(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2  
  const productList = [...document.getElementsByClassName('product')];
  const subtotals = productList.map(product => updateSubtotal(product));

  // ITERATION 3
  const total = subtotals.reduce((tot, subtotal) => {return tot += subtotal}, 0);
  
  document.querySelector('#total-value span').innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productToDelete = target.parentNode.parentNode;
  productToDelete.parentNode.removeChild(productToDelete);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const product = event.currentTarget.parentNode.parentNode;
  const productName = product.querySelector('input[type="text"]').value;
  const productPrice = product.querySelector('input[type="number"]').value;
  if(productName.length === 0) {
    alert('The product needs a name!');
    return;
  }
  const productList = [...document.getElementsByClassName('product')]
  const productNames = productList.map(product => product.querySelector('.name span').innerHTML);
  if(productNames.indexOf(productName) != -1) {
    alert(`A product named ${productName} already exists!`);
    return;
  }

  if(Number(productPrice) === 0) {
    alert('The product needs a price!');
    return;
  }

  const newProductRow = document.createElement('tr');
  newProductRow.className ='product';

  const nameCell = document.createElement('td');
  nameCell.className ='name';
  const nameSpan = document.createElement('span');
  nameSpan.innerHTML = productName;
  nameCell.appendChild(nameSpan);
  newProductRow.appendChild(nameCell);

  const priceCell = document.createElement('td');
  priceCell.className = 'price';
  priceCell.innerHTML = '$';
  const priceSpan = document.createElement('span');
  priceSpan.innerHTML = productPrice;
  priceCell.appendChild(priceSpan);
  newProductRow.appendChild(priceCell);

  const quantityCell = document.createElement('td');
  quantityCell.className = 'quantity';
  const quantityInput = document.createElement('input');
  quantityInput.setAttribute('type', 'number');
  quantityInput.setAttribute('value', '0');
  quantityInput.setAttribute('min', '0');
  quantityInput.setAttribute('placeholder', 'Quantity');
  quantityCell.appendChild(quantityInput);
  newProductRow.appendChild(quantityCell);

  const subtotalCell = document.createElement('td');
  subtotalCell.className = 'subtotal';
  subtotalCell.innerHTML = '$';
  const subtotalSpan = document.createElement('span');
  subtotalSpan.innerHTML = 0;
  subtotalCell.appendChild(subtotalSpan);
  newProductRow.appendChild(subtotalCell);

  const actionCell = document.createElement('td');
  actionCell.className = 'action';
  const actionButton = document.createElement('button');
  actionButton.textContent = 'Remove';
  actionButton.className = 'btn btn-remove';
  actionButton.addEventListener('click', removeProduct);
  actionCell.appendChild(actionButton);
  newProductRow.appendChild(actionCell);

  product.querySelector('input[type="text"]').value = '';
  product.querySelector('input[type="number"]').value = 0;

  document.querySelector('#cart tbody').appendChild(newProductRow);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtnList = [...document.getElementsByClassName('btn-remove')];
  removeBtnList.map(button => button.addEventListener('click', removeProduct));

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
