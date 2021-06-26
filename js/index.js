// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector(`.quantity input`);
  const subtotalElement = product.querySelector(`.subtotal span`);

  const total = Number(priceElement.innerHTML) * Number(quantityElement.value);
  subtotalElement.innerHTML = total;

  return total;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const productElement = document.getElementsByClassName(`product`);

  let total = 0;
  for (const elem of productElement) {
    total = total + updateSubtotal(elem);
  }

  // ITERATION 3
  const totalCostElement = document.querySelector('#total-value span');
  totalCostElement.innerHTML = total;

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);

  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;

  const createProductRow = target.parentNode.parentNode;
  const inputs = createProductRow.getElementsByTagName('input');
  const productName = inputs[0].value;
  const productPrice = inputs[1].value;

  const tableBodyElement =
    createProductRow.parentNode.parentNode.querySelector('tbody');
  // const newProduct = tableBodyElement.children[0].cloneNode(true);
  // console.log(newProduct);
  // newProduct.querySelector('.name').innerHTML = productName;
  // newProduct.querySelector('.price span').innerHTML = productPrice;

  const newProduct = document.createElement('tr');
  newProduct.classList.add('product');

  const productNameTd = document.createElement('td');
  const productNameSpan = document.createElement('span');
  productNameTd.classList.add('name');
  productNameSpan.append(productName);
  productNameTd.append(productNameSpan);

  const productPriceTd = document.createElement('td');
  const productPriceSpan = document.createElement('span');
  productPriceTd.classList.add('price');
  productPriceTd.append('$');
  productPriceTd.append(productPriceSpan);
  productPriceSpan.append(productPrice);
  productPriceSpan.append('.00');

  const productQuantityTd = document.createElement('td');
  const productQuantityInput = document.createElement('input');
  productQuantityTd.classList.add('quantity');
  productQuantityInput.setAttribute('type', 'number');
  productQuantityInput.setAttribute('value', '0');
  productQuantityInput.setAttribute('min', '0');
  productQuantityInput.setAttribute('placeholder', 'Quantity');
  productQuantityTd.append(productQuantityInput);

  const productSubtotalTd = document.createElement('td');
  const productSubTotalSpan = document.createElement('span');
  productSubtotalTd.classList.add('subtotal');
  productSubtotalTd.append('$');
  productSubtotalTd.append(productSubTotalSpan);
  productSubTotalSpan.append('0');

  const removeButtonTd = document.createElement('td');
  const removeButton = document.createElement('button');
  removeButtonTd.classList.add('action');
  removeButton.classList.add('btn');
  removeButton.classList.add('btn-remove');
  removeButton.append('Remove');
  removeButtonTd.append(removeButton);

  newProduct.append(productNameTd);
  newProduct.append(productPriceTd);
  newProduct.append(productQuantityTd);
  newProduct.append(productSubtotalTd);
  newProduct.append(removeButtonTd);

  tableBodyElement.append(newProduct);

  const newProductRemoveButton = newProduct.querySelector('.btn-remove');
  newProductRemoveButton.addEventListener('click', removeProduct);

  calculateAll();
  inputs[0].value = '';
  inputs[1].value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttonElements = document.getElementsByClassName('btn-remove');
  for (let button of buttonElements) {
    button.addEventListener('click', removeProduct);
  }

  const createButton = document.getElementById('create');

  createButton.addEventListener('click', createProduct);
});
