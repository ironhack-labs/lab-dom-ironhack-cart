// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = product.querySelector('.subtotal span');

  const calculateSubtotal = price * quantity;
  subTotal.innerHTML = calculateSubtotal;

  return calculateSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product');
  const productsArray = [...products];
  const subtotals = productsArray.map(product => updateSubtotal(product));

  // ITERATION 3
  //... your code goes here
  const sumSubTotals = subtotals.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 0);
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = sumSubTotals;
}

// ITERATION 4

function removeProduct(event) {
  //const target = event.currentTarget;
  const target = event.target;
  console.log('The target in remove is:', target);
  //... your code goes here
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let product = document.createElement('tr');
  product.setAttribute('class', 'product');
  let tableBody = document.getElementsByTagName('tbody')[0];
  tableBody.appendChild(product);

  let productName = document.createElement('td');
  productName.setAttribute('class', 'name');
  product.appendChild(productName);
  let name = document.createElement('span');
  let nameInput = document.querySelector('.product-name input');
  name.innerHTML = nameInput.value;
  productName.appendChild(name);

  let productPrice = document.createElement('td');
  productPrice.setAttribute('class', 'price');
  productPrice.innerText = '$';
  product.appendChild(productPrice);
  let price = document.createElement('span');
  let priceInput = document.querySelector('.product-price input')
  price.innerHTML = priceInput.value;
  productPrice.appendChild(price);

  let productQuantity = document.createElement('td');
  productQuantity.setAttribute('class', 'quantity');
  product.appendChild(productQuantity);
  let quantity = document.createElement('input');
  quantity.setAttribute('type', 'number');
  quantity.setAttribute('value', '0');
  quantity.setAttribute('min', '0');
  quantity.setAttribute('placeholder', 'Quantity');
  productQuantity.appendChild(quantity);

  let productSubTotal = document.createElement('td');
  productSubTotal.setAttribute('class', 'subtotal');
  productSubTotal.innerText = '$';
  product.appendChild(productSubTotal);
  let subTotal = document.createElement('span');
  subTotal.innerHTML = '0';
  productSubTotal.appendChild(subTotal);


  let productAction = document.createElement('td');
  productAction.setAttribute('class', 'action');
  product.appendChild(productAction);
  let button = document.createElement('button');
  button.setAttribute('class', 'btn');
  button.setAttribute('class', 'btn-remove');
  button.innerText = 'Remove';
  productAction.appendChild(button);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  [...removeButtons].map(button => button.addEventListener('click', removeProduct));

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
