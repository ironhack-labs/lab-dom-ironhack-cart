const cart = document.getElementById(`cart`);

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = parseFloat(product.querySelector(`.price span`).textContent),
    quantity = parseFloat(product.querySelector(`.quantity input`).value),
    subtotal = product.querySelector(`.subtotal span`);

  subtotal.textContent = (price * quantity).toFixed(2);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = cart.querySelectorAll(`.product`);
  let total = 0;

  products.forEach(product => {
    updateSubtotal(product);

    total += parseFloat(product.querySelector(`.subtotal span`).textContent);
  });

  // ITERATION 3
  //... your code goes here
  document.querySelector(`#total-value span`).textContent = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.closest(`.product`).remove();
}

// ITERATION 5

function createProduct() {
  const nameInputEl = cart.querySelector(`.create-product [placeholder='Product Name']`),
    priceInputEl = cart.querySelector(`.create-product [placeholder='Product Price']`),
    name = nameInputEl.value,
    price = priceInputEl.value;

  if (!name) {
    return;
  }

  const product = document.createElement(`tr`),
    nameSpan = document.createElement(`span`),
    priceSpan = document.createElement(`span`),
    subtotalSpan = document.createElement(`span`),
    quantityInput = document.createElement(`input`),
    removeBtn = document.createElement(`button`),
    nameEl = document.createElement(`td`),
    priceEl = document.createElement(`td`),
    quantity = document.createElement(`td`),
    subtotal = document.createElement(`td`),
    action = document.createElement(`td`);

  nameSpan.textContent = name;
  priceSpan.textContent = price;
  subtotalSpan.textContent = `0`;
  removeBtn.textContent = `Remove`;
  priceEl.textContent = `$`;
  subtotal.textContent = `$`;

  quantityInput.setAttribute(`type`, `number`);
  quantityInput.setAttribute(`min`, `0`);
  quantityInput.setAttribute(`placeholder`, `Quantity`);
  quantityInput.value = `0`;

  product.className = `product`;
  nameEl.className = `name`;
  priceEl.className = `price`;
  quantity.className = `quantity`;
  subtotal.className = `subtotal`;
  action.className = `action`;
  removeBtn.className = `btn btn-remove`;

  removeBtn.addEventListener(`click`, (event) => removeProduct(event));

  nameEl.appendChild(nameSpan);
  priceEl.appendChild(priceSpan);
  quantity.appendChild(quantityInput);
  subtotal.appendChild(subtotalSpan);
  action.appendChild(removeBtn);

  [nameEl, priceEl, quantity, subtotal, action].forEach(element => {
    product.appendChild(element);
  });


  cart.querySelector(`tbody`).insertBefore(product, cart.querySelector(`#cart .create-product`));
  nameInputEl.value = ``;
  priceInputEl.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  cart.querySelector(`#create.btn`).addEventListener(`click`, createProduct);

  const removeBtns = cart.querySelectorAll(`.btn-remove`);

  removeBtns.forEach(btn => {
    btn.addEventListener(`click`, (event) => removeProduct(event));
  });
});