// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalValue = quantity * price;
  product.querySelector('.subtotal span').innerHTML = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = [];
  products.forEach(product => {
    total.push(updateSubtotal(product));
  })
  total = total.reduce((a, b) => a + b,0);
  document.querySelector('#total-value span').innerHTML = total; 
}

// ITERATION 4

function removeProduct(event) {
  event.currentTarget.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll('.create-product input');
  const name = inputs[0].value;
  const price = inputs[1].value;
  const tbody = document.querySelector('tbody');
  const row = `<td class="name"><span>${name}</span></td><td class="price">$<span>${price}</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>`

  const tr = document.createElement('tr');
  tr.classList.add('product');
  tr.innerHTML = row;

  tbody.appendChild(tr);

  let removeProductBtns = document.querySelectorAll('.btn-remove');
  let removeProductBtn = removeProductBtns[removeProductBtns.length - 1];

  removeProductBtn.addEventListener('click', removeProduct);  
  inputs[0].value = '';
  inputs[1].value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.querySelectorAll('.btn-remove');
  removeProductBtns.forEach(removeProductBtn => {
    removeProductBtn.addEventListener('click', removeProduct);
  })

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});