// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').textContent);
  const amount = parseInt(product.querySelector('.quantity input').value);
  const subtotal = price * amount;
  product.querySelector('.subtotal span').textContent = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {
  const total = Array.from(document.querySelectorAll('.product'))
    .reduce((total, product) => total + updateSubtotal(product), 0);
  console.log(total);

  // ITERATION 2
  document.querySelector('#total-value span').textContent = total.toFixed(2);

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.closest('.product').remove(); // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  calculateAll();
}

// ITERATION 5

function onClickCreateProduct() {
  const nameInput = document.querySelector('.create-product [name="name"]');
  const name = nameInput.value;
  
  const priceInput = document.querySelector('.create-product [name="price"]');
  const price = parseFloat(priceInput.value);
  
  if (name && price) {
    nameInput.value = '';
    priceInput.value = 0;
    nameInput.focus();
    createProduct(name, price);
  }
}

function createProduct(name, price) {
  const product = document.querySelector('#templates .product').cloneNode(true);
  product.querySelector('.name span').textContent = name;
  product.querySelector('.price span').textContent = price.toFixed(2);
  product.querySelector('.btn-remove').addEventListener('click', removeProduct);
  product.querySelector('[name="quantity"]').addEventListener('input', calculateAll)

  document.querySelector('#cart tbody').append(product);
}

// ITERATION 6: random product

function createRandomProduct() {
  const name = faker.commerce.productName();
  const price = parseFloat(faker.commerce.price());
  createProduct(name, price);
}

// ITERATION 7: delete all products
function deleteAllProducts() {
  document.querySelectorAll('#cart .product')
    .forEach(product => product.remove());
  calculateAll();
}

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('delete-all')
    .addEventListener('click', deleteAllProducts)

  document.querySelectorAll('.product .btn-remove')
    .forEach(btn => btn.addEventListener('click', removeProduct));

  document.querySelector('#create')
    .addEventListener('click', onClickCreateProduct);

  document.getElementById('create-random')
    .addEventListener('click', createRandomProduct);

  document.querySelector('[name="price"]')
    .addEventListener('keyup', (event) => {
      // https://keycode.info/
      if (event.keyCode === 13) {
        onClickCreateProduct()
      }
    });

  document.querySelectorAll('.product [name="quantity"]')
    .forEach(input => input.addEventListener('input', calculateAll));
});
