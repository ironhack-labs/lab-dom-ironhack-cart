// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');


  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  
  const price = Number(priceElement.innerHTML);
  const quantity = Number(quantityElement.value);
  
  const subtotal = price * quantity;
  
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal.toFixed(2);
  
  return subtotal;
}

function calculateAll() {
  const productRows = document.getElementsByClassName('product');
  let total = 0;

  for (let product of productRows) {
    total += updateSubtotal(product);
  }

  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total.toFixed(2);
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
 
  const row = target.parentNode.parentNode;
  
  row.parentNode.removeChild(row);
  

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let removeBtn of removeButtons) {
    removeBtn.addEventListener('click', removeProduct);
  }
});

function createProduct() {
  
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  

  const name = nameInput.value;
  const price = Number(priceInput.value);


  if (!name || price === 0) {
    alert('Please enter both product name and price');
    return;
  }

 
  const tbody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.className = 'product';
  
  newRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${Number(price).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;


  tbody.appendChild(newRow);

  
  const removeButton = newRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

 
  nameInput.value = '';
  priceInput.value = '0';
}

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  
  const price = Number(priceElement.innerHTML);
  const quantity = Number(quantityElement.value);
  
  const subtotal = price * quantity;
  
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal.toFixed(2);
  
  return subtotal;
}

function calculateAll() {
  const productRows = document.getElementsByClassName('product');
  let total = 0;

  for (let product of productRows) {
    total += updateSubtotal(product);
  }

  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total.toFixed(2);
}

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  row.parentNode.removeChild(row);
  calculateAll();
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

 
  const removeButtons = document.getElementsByClassName('btn-remove');
  for (let removeBtn of removeButtons) {
    removeBtn.addEventListener('click', removeProduct);
  }

  
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});

