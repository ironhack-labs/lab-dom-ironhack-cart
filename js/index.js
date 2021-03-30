// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');

  return subtotal.innerText = Number(price) * quantity;
}

function calculateAll() {
  // ITERATION 2 + 3 
  let products = document.querySelectorAll('.product');
  let totalPrice = 0;

  products.forEach(prod => {
    totalPrice += updateSubtotal(prod);
  });

  let totalValue = document.querySelector('#total-value span');
  totalValue.innerText = totalPrice ;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  document.querySelector('#cart tbody').removeChild(target);
}

// ITERATION 5
function createProduct() {
  let newName = document.querySelector("input[placeholder*='Name']");
  let newPrice = document.querySelector("input[placeholder*='Price']");
  
  // create new empty row
  const newProductRow = document.createElement('tr');
  newProductRow.className = 'product';

  // create new empty cells and append to new row
  const cellNames = ['name', 'price', 'quantity', 'subtotal', 'action'];
  cellNames.forEach(cellName => {
    newCell = document.createElement('td');
    newCell.className = cellName;
    newProductRow.appendChild(newCell);
  });

  // fill cells
  newProductRow.querySelector('.name').innerHTML = `<span>${newName.value}</span>`;
  newProductRow.querySelector('.price').innerHTML = `$<span>${newPrice.value}</span>`;
  newProductRow.querySelector('.quantity').innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;
  newProductRow.querySelector('.subtotal').innerHTML = `$<span>0</span>`;
  newProductRow.querySelector('.action').innerHTML = `<button class="btn btn-remove">Remove</button>`;
  
  // append new row to table
  document.querySelector('#cart tbody').appendChild(newProductRow);

  // clear imnput fields
  newName.value = '';
  newPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
      removeProduct(event)
      calculateAll();
    })
  })

  const addProductBtn = document.querySelector('#create')
  addProductBtn.addEventListener('click', createProduct)
});