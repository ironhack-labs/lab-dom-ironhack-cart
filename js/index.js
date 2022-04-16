// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const priceValue = price.innerHTML;
  console.log(priceValue);

  const quantity = product.querySelector(
    '.quantity input[placeholder="Quantity"]'
  );
  const quantityValue = quantity.value;
  console.log(quantityValue);

  const actualValue = priceValue * quantityValue;
  console.log(actualValue);

  const subTotal = product.querySelector('.subtotal span');
  console.log(subTotal);
  subTotal.innerHTML = actualValue;
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  //... your code goes here
  const severalProducts = document.getElementsByClassName('product');
  console.log(severalProducts);

  let totalPriceValue = 0;

  Object.keys(severalProducts).forEach((key) => {
    const priceSpanSelect = severalProducts[key].querySelector('.price span');

    const priceValue = priceSpanSelect.innerHTML;

    const quantity =
      severalProducts[key].querySelector('.quantity input').value;

    const subTotalValue = Number(priceValue) * Number(quantity);
    // console.log(subTotalValue);

    const subTotalPerProduct =
      severalProducts[key].querySelector('.subtotal span');

    subTotalPerProduct.innerHTML = subTotalValue;

    // // ITERATION 3
    // //... your code goes here

    totalPriceValue += Number(subTotalValue);
    // const totalPriceValue = +Number(subTotalPerProduct);
  });

  const totalPrice = document.querySelector('#total-value span');

  totalPrice.innerHTML = totalPriceValue;

  // console.log(totalPriceValue);
}
// ITERATION 4

function removeProduct(event) {
  const product = event.currentTarget.parentElement.parentElement;

  // const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here

  product.remove();
}

// ITERATION 5

function createProduct() {
  // TBODY
  const tbodySelect = document.querySelector('tbody');
  // PRODUCTO TR
  const trElement = document.createElement('tr');
  trElement.classList.add('product');

  // NAME TD
  const tdElementName = document.createElement('td');
  tdElementName.classList.add('name');
  // NAME TD - NEW PRODUCT NAME
  const newProductName = document.querySelector(
    '.create-product td input[placeholder="Product Name"]'
  ).value;
  // NAME TD - SPAN NEW PRODUCT NAME
  const newSpanProduct = document.createElement('span');

  tdElementName.appendChild(newSpanProduct);

  newSpanProduct.innerHTML = newProductName;

  // PRICE TD
  const tdElementPrice = document.createElement('td');
  tdElementPrice.classList.add('price');
  // PRICE TD - NEW PRICE PRODUCT
  const newPriceProduct = document.querySelector(
    '.create-product td input[placeholder="Product Price"]'
  ).value;
  // PRICE TD - SPAN NEW PRICE PRODUCT
  const newSpanPrice = document.createElement('span');

  tdElementPrice.appendChild(newSpanPrice);

  newSpanPrice.innerHTML = newPriceProduct;

  // QUANTITY TD
  const tdElementQuantity = document.createElement('td');
  tdElementQuantity.classList.add('quantity');
  // QUANTITY TD - NEW QUANTITY PRODUCT
  const newQuantityProduct = document.querySelector(
    '.create-product .quantity input[placeholder="Quantity"]'
  ).value;

  // QUANTITY TD - SPAN NEW QUANTITY PRODUCT
  const newInputQuantity = document.createElement('input');

  newInputQuantity.setAttribute('type', 'number');
  newInputQuantity.setAttribute('value', '0');
  newInputQuantity.setAttribute('placeholder', 'Quantity');

  tdElementQuantity.appendChild(newInputQuantity);

  newInputQuantity.value = newQuantityProduct;

  // SUBTOTAL TD
  const tdElementSubtotal = document.createElement('td');
  tdElementSubtotal.classList.add('subtotal');
  tdElementSubtotal.innerText = '$';

  // SUBTOTAL TD - VALUE
  const newSubtotalProduct = document.querySelector(
    '.create-product .subtotal span'
  );

  // SUBTOTAL TD - SPAN
  const newSpanSubtotal = document.createElement('span');
  console.log(newSpanSubtotal);

  tdElementSubtotal.appendChild(newSpanSubtotal);

  newSpanSubtotal.innerHTML = newSubtotalProduct.innerHTML;

  // REMOVE BUTTON
  const tdElementRemove = document.createElement('td');
  tdElementRemove.classList.add('action');

  // REMOVE BUTTON - APPEAR
  const newButtonRemove = document.createElement('button');

  newButtonRemove.setAttribute('id', 'remove');
  newButtonRemove.classList.add('btn');
  newButtonRemove.classList.add('btn-remove');
  newButtonRemove.innerText += 'Remove';

  tdElementRemove.appendChild(newButtonRemove);

  //INJECTOR - TBODY
  tbodySelect.appendChild(trElement);

  // INJECTOR TR ELEMENT - PRODUCT -
  trElement.appendChild(tdElementName);
  trElement.appendChild(tdElementPrice);
  trElement.appendChild(tdElementQuantity);
  trElement.appendChild(tdElementSubtotal);
  trElement.appendChild(tdElementRemove);

  // REMOVE BUTTONS

  const removeButtons = document.getElementsByClassName('btn btn-remove');
  console.log(
    '%cindex.js line:223 removeButtons',
    'color: #007acc;',
    removeButtons
  );
  Object.keys(removeButtons).forEach((key) => {
    removeButtons[key].addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  // CALCULATE ALL

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // CREATE  BUTTONS
  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
