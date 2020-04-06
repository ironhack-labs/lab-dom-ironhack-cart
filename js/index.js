// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML * 1;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  
  let subtotalValue = price * quantity;

  subtotal.innerHTML = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  let total = 0;
  
  // ITERATION 2
  const allProducts = [...document.querySelectorAll('.product')];
  allProducts.forEach(element => {
    total += updateSubtotal(element);
  })

  // ITERATION 3
  const totalSpan = document.querySelector('#total-value span');
  totalSpan.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const productTarget = target.parentNode.parentNode;
  productTarget.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productTarget = event.currentTarget.parentNode.parentNode;
  const inputs = [...productTarget.querySelectorAll('td input')]

  const name = inputs[0].value;
  let price = inputs[1].value * 1;
  price = price.toFixed(2);  

  // Create product tr
  let productTr = document.createElement('tr');
  productTr.setAttribute('class', 'product');

  // Add name
  let productName = document.createElement('td');
  productName.setAttribute('class', 'name');
  productName.innerHTML = `<span>${name}</span>`;
  productTr.appendChild(productName);

  // Add price
  let productPrice = document.createElement('td');
  productPrice.setAttribute('class', 'price');
  productPrice.innerHTML = `$<span>${price}</span>`;
  productTr.appendChild(productPrice);

  // Add others
  let productQuantity = document.createElement('td');
  productQuantity.setAttribute('class', 'quantity');
  productQuantity.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`
  productTr.appendChild(productQuantity);

  let productSubtotal = document.createElement('td');
  productSubtotal.setAttribute('class', 'subtotal');
  productSubtotal.innerHTML = `$<span>0</span>`
  productTr.appendChild(productSubtotal);

  let removeButton = document.createElement('td');
  removeButton.setAttribute('class', 'action');
  removeButton.innerHTML = `<button class="btn btn-remove">Remove</button>`
  productTr.appendChild(removeButton);

  // Add listener
  const removeButtonButton = removeButton.querySelector('.btn-remove');
  removeButtonButton.addEventListener('click', removeProduct);

  // Add to body
  let body = document.querySelector('tbody');
  body.appendChild(productTr);

  // Clear inputs
  inputs[0].value = '';
  inputs[1].value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.querySelector('#create');
  createBtn.addEventListener('click', createProduct);

  const removeBtn = [...document.querySelectorAll('.btn-remove')];
  removeBtn.forEach(element => element.addEventListener('click', removeProduct));

});