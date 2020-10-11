// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price*quantity;
  
  product.querySelector('.subtotal span').innerHTML = subtotal;
  
  return subtotal;
}

function calculateAll() {
  
  // ITERATION 2
  //These lines are commented because I took a different approach with iteration 3 that combines
  //both iterations (2 and 3):
  
  //const products = document.querySelectorAll('.product');
  //products.forEach(product => updateSubtotal(product));
  
   
  // ITERATION 3
  const products = [...document.querySelectorAll('.product')];
  
  let total = products.reduce((accumulator, product) => (accumulator + updateSubtotal(product)), 0);

  document.querySelector('#total-value span').innerHTML = total;

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let rootNode = target.parentNode.parentNode.parentNode;
  let product = target.parentNode.parentNode;
  rootNode.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  let prodName = document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[0].value;
  let prodPrice = document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[1].value;
  let tableBody = document.getElementById('cart').getElementsByTagName('tbody')[0];
  let newProduct = document.querySelector('.product').cloneNode(true);
  newProduct.querySelector('.name span').innerHTML = prodName;
  newProduct.querySelector('.price span').innerHTML = prodPrice;
  newProduct.getElementsByClassName('btn btn-remove')[0].addEventListener('click', removeProduct);
  tableBody.appendChild(newProduct);
  document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[0].placeholder = "Product Name";
  document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[0].value = "";
  document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[1].placeholder = "Product Price";
  document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[1].value = 0;
  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = [...document.getElementsByClassName('btn btn-remove')];
  removeButtons.forEach(removeButton => removeButton.addEventListener('click', removeProduct));

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct);
});
