// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal = parseInt(price) * parseInt(quantity);
  
  product.querySelector('.subtotal span').innerText = `${subTotal}`;

  return subTotal;
}

function calculateAll() {
  console.log('yo')
  let totalPrice = 0;
  
  let products = document.querySelectorAll('.product');
  
  products.forEach((product) => {
    totalPrice += updateSubtotal(product)
  })

  document.querySelector('#total-value').innerText = `Total: $${totalPrice}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target)
  let product = target.parentNode;
  product.remove()
  calculateAll()  
}

// ITERATION 5

function createProduct() {

  let createInput = document.getElementById('create-input');
  let productName = createInput.value;
  let priceInput = document.getElementById('price-input');
  let productPrice = priceInput.value;

  let productTr = document.createElement('tr');
  productTr.classList.add('product');

  let nameTd = document.createElement('td');
  nameTd.classList.add('name');
  nameTd.innerHTML = '<span>' + productName + '</span>';

  let priceTd = document.createElement('td');
  priceTd.classList.add('price');
  priceTd.innerHTML = '$ <span>' + productPrice + '</span>';

  let quantityTd = document.createElement('td');
  quantityTd.classList.add('quantity');

  let quantityInput = document.createElement('input');
  quantityInput.setAttribute('type', 'number');
  quantityInput.setAttribute('value', '0');
  quantityInput.setAttribute('min', '0');
  quantityInput.setAttribute('placeholder', 'Quantity');

  let subTotalTd = document.createElement('td');
  subTotalTd.classList.add('subtotal')
  subTotalTd.innerHTML = '$ <span>0</span>';

  let actionTd = document.createElement('td');
  actionTd.classList.add('action');
  let actionBtn = document.createElement('button');
  actionBtn.classList.add('btn');
  actionBtn.classList.add('btn-remove')
  actionBtn.innerText = 'Remove';

  let tbody = document.getElementById('cart-items');
  tbody.appendChild(productTr);
  
  productTr.appendChild(nameTd);
  productTr.appendChild(priceTd);
  productTr.appendChild(quantityTd);
  quantityTd.appendChild(quantityInput);
  productTr.appendChild(subTotalTd);
  productTr.appendChild(actionTd);
  actionTd.appendChild(actionBtn);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
})
  
const removeBtns = document.querySelectorAll('.action');
for (i = 0; i < removeBtns.length; i++) {
  removeBtns[i].onclick = function(event) {
    console.log('yo')
    removeProduct(event);
  }
}

