// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal = Number((quantity * price).toFixed(2));

  product.querySelector('.subtotal span').innerHTML = `${subTotal}`;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product'); // - second element? select all!
  // updateSubtotal(singleProduct);
  // end of test

// ITERATION 2

  let products = document.querySelectorAll('.product');
  let total = 0;
  
  products.forEach(element => {
    
    total += updateSubtotal(element);
  });

// ITERATION 3
  
  document.querySelector('#total-value span').innerHTML = `${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.closest('.product');
  const product = target.parentNode;
  product.removeChild(target);
}

// ITERATION 5

function createProduct() {

  let newProduct = document.getElementById('template').cloneNode(true);

  let productName = document.getElementById('product-name').value;
  newProduct.querySelector('.name span').innerHTML = `${productName}`;

  let unitPrice = document.getElementById('unit-price').value;
  newProduct.querySelector('.price span').innerHTML = `${unitPrice}`;

  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);

  newProduct.setAttribute('class', 'product');
  newProduct.removeAttribute('id');
  newProduct.removeAttribute('hidden');

  document.getElementById('productList').appendChild(newProduct);
}

//eventListeners

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(element => element.addEventListener('click', removeProduct));

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
