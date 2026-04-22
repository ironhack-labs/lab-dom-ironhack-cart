// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceEl = product.querySelector('.price span');
  const qtyInput = product.querySelector('.quantity input');
  const subtotalEl = product.querySelector('.subtotal');

  const price = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, '')) || 0;
  const quantity = parseInt(qtyInput.value) || 0;

  const subtotal = price * quantity;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  return subtotal;
}

  // ITERATION 2 and 3
function calculateAll() {
   
  const productRows = document.querySelectorAll('tr.product');
  let total = 0;

  productRows.forEach(product => {
      const subtotal = updateSubtotal(product);
      total += subtotal;
      
  });
  
  const totalEl = document.querySelector('#total-value span');
  totalEl.textContent = `$${total.toFixed(2)}`;
  }


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  const productRow = target.parentNode.parentNode;
  productRow.remove();
  calculateAll();
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  
  const productName = nameInput.value.trim();
  const productPrice = parseFloat(priceInput.value) || 0;
  
  if (!productName || productPrice <= 0) {
    alert('Please enter a valid product name and price');
    return;
  }
  
  const newRow = document.createElement('tr');
  newRow.className = 'product';
  
  const nameCell = document.createElement('td');
  nameCell.className = 'name';
  const nameSpan = document.createElement('span');
  nameSpan.textContent = productName;
  nameCell.appendChild(nameSpan);
  
  const priceCell = document.createElement('td');
  priceCell.className = 'price';
  priceCell.textContent = '$';
  const priceSpan = document.createElement('span');
  priceSpan.textContent = productPrice.toFixed(2);
  priceCell.appendChild(priceSpan);
  
  const quantityCell = document.createElement('td');
  quantityCell.className = 'quantity';
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = 0;
  quantityInput.min = 0;
  quantityInput.placeholder = 'Quantity';
  quantityCell.appendChild(quantityInput);
  
  const subtotalCell = document.createElement('td');
  subtotalCell.className = 'subtotal';
  subtotalCell.textContent = '$';
  const subtotalSpan = document.createElement('span');
  subtotalSpan.textContent = '0.00';
  subtotalCell.appendChild(subtotalSpan);
  
  const actionCell = document.createElement('td');
  actionCell.className = 'action';
  const removeBtn = document.createElement('button');
  removeBtn.className = 'btn btn-remove';
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', removeProduct);
  actionCell.appendChild(removeBtn);
  
  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(quantityCell);
  newRow.appendChild(subtotalCell);
  newRow.appendChild(actionCell);
  
  const tableBody = document.querySelector('#cart tbody');
  tableBody.appendChild(newRow);
  
  nameInput.value = '';
  priceInput.value = 0;
  
  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
  
  calculateAll();
});
