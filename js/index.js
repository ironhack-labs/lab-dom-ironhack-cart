// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //create variable that holds price and other that holds quantity
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  //console.dir(price);
  //console.dir(quantity);

  //extract values from variables above
  const price = priceElement.innerText;
  const quantity = quantityElement.value;

  //create a value that multiplicates the 2 above
  const productValue = price * quantity;

  //create variable that holds the multiplication
  const subtotalElement = product.querySelector('.subtotal span');
  //console.dir(subtotalPrice);
  //assign the multiplication to the subtotal class in html
  subtotalElement.innerText = productValue;
  return productValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2

  //create a variable that holds all the product lines in it

  const productElements = document.getElementsByClassName('product');
  //console.dir(productElements);
  let totalValue = 0;
  for (let product of productElements) {
    const updateSubtotalFunction = updateSubtotal(product);
    //console.log(updateSubtotalFunction);
    totalValue += updateSubtotalFunction;
  }

  // ITERATION 3

  //create a variable that holds the total
  const totalElement = document.querySelector('#total-value span');
  //console.dir(totalElement);

  //create a variable that sums all of the product's subtotals

  //assign that value to the variable that holds the total
  totalElement.innerText = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement;
  console.log('The target in remove is:', target);
  //... your code goes here

  console.dir(target);
  target.parentElement.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //create the new elements we will need
  const trProduct = document.createElement('tr');
  trProduct.className = 'product';
  const tdName = document.createElement('td');
  tdName.className = 'name';
  const spanName = document.createElement('span');
  const tdPrice = document.createElement('td');
  tdPrice.className = 'price';
  const spanPrice = document.createElement('span');
  const tdQuantity = document.createElement('td');
  tdQuantity.className = 'quantity';
  const inputQuantity = document.createElement('input');
  inputQuantity.type = 'number';
  inputQuantity.value = '0';
  inputQuantity.min = '0';
  inputQuantity.placeholder = 'Quantity';
  const tdSubtotal = document.createElement('td');
  tdSubtotal.className = 'subtotal';
  const spanSubtotal = document.createElement('span');
  const tdAction = document.createElement('td');
  tdAction.className = 'action';
  const button = document.createElement('button');
  button.className = 'btn btn-remove';
  //console.dir(trProduct);

  //call the values of the inputs, which will be used in the new elements
  const inputValues = document.querySelectorAll('.create-product input');
  const bodyElement = document.querySelector('tbody');
  //console.dir(inputValues);

  //assigning the values to the elements
  spanName.innerText = inputValues[0].value;
  //console.log(spanName);
  tdPrice.innerText = '$';
  spanPrice.innerText = inputValues[1].value;
  tdSubtotal.innerText = '$';
  spanSubtotal.innerText = '0';
  button.innerText = 'Remove';
  button.addEventListener('click', removeProduct);

  //attach the elements to each others and putting them on the DOM
  tdName.appendChild(spanName);
  tdPrice.appendChild(spanPrice);
  tdQuantity.appendChild(inputQuantity);
  tdSubtotal.appendChild(spanSubtotal);
  tdAction.appendChild(button);
  trProduct.appendChild(tdName);
  trProduct.appendChild(tdPrice);
  trProduct.appendChild(tdQuantity);
  trProduct.appendChild(tdSubtotal);
  trProduct.appendChild(tdAction);
  bodyElement.appendChild(trProduct);

  //running subtotal and total functions
  updateSubtotal(trProduct);
  calculateAll();
  //clearing the input once its over
  inputValues[0].value = '';
  inputValues[1].value = '';
  //applying the removeProduct to the newly created products??
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //create variable that holds the remove button
  const removeButtonElements = document.querySelectorAll('.btn-remove');
  //console.dir(removeButtonElements);
  //loop through all the remove buttons that exist in the DOM
  //add an event listener on click passing removeproduct() as an argument
  for (let button of removeButtonElements) {
    button.addEventListener('click', removeProduct);
  }

  const createButtonElement = document.getElementById('create');
  createButtonElement.addEventListener('click', createProduct);
});
