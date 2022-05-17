// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  // console.log('price&quantity', price, quantity);

  const subtotalValue = price * quantity;
  // console.log('subtotalValue', subtotalValue);

  let subtotalContainer = product.querySelector('.subtotal span');
  // console.log('container', subtotalContainer);
  subtotalContainer.textContent = subtotalValue;
  // console.log('container', subtotalContainer);

  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  const myProducts = document.querySelectorAll('.product');
  // console.log(myProducts);

  myProducts.forEach((product) => {
    total += updateSubtotal(product);
  });
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  const parent = target.closest('tr');
  // console.log(parent);
  parent.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  // take the info about product name and price
  const productName = document.querySelector(
    '.create-product input[type=text]'
  );
  // console.log(productName);
  const productPrice = document.querySelector(
    '.create-product input[type=number]'
  );
  // console.log(productPrice);

  // Get template and clone it
  const myTemplate = document.querySelector('#row-template');
  console.log(myTemplate);

  const myClone = document.importNode(myTemplate.content, true);
  console.log(myClone);

  // Get name and price from template and apply new values to it
  const name = myClone.querySelector('.name span');
  const price = myClone.querySelector('.price span');
  name.textContent = productName.value;
  price.textContent = productPrice.value;

  // Listen to the new product remove button, for clicks
  const btnRemove = myClone.querySelector('.btn-remove');
  btnRemove.addEventListener('click', removeProduct);

  // Create new line in the table
  const parent = document.querySelector('tbody');
  console.log(parent);
  parent.appendChild(myClone);

  // clear the input fields in the creation form.
  productName.value = '';
  productPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  // console.log(removeProductBtn);

  removeProductBtn.forEach((product) => {
    product.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
