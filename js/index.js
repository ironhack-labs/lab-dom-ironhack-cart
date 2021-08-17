// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;

  const subTotal = parseFloat(price) * parseInt(quantity);

  product.querySelector('.subtotal span').innerText = subTotal;

  return subTotal;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerText = total.toFixed(2);

  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parentOfParent = target.parentElement.parentElement;

  parentOfParent.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  let tbody = document.querySelector('tbody');

  let newProductName = document.querySelector(
    '.create-product input[type="text"]'
  ).value;
  let newProducPrice = document.querySelector(
    '.create-product input[type="number"]'
  ).value;

  let product = document.querySelector('.product').cloneNode(true);

  product.querySelector('.name span').innerText = newProductName;
  product.querySelector('.price span').innerText = newProducPrice;

  tbody.appendChild(product);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const deleteProductBtns = document.querySelectorAll('.action .btn-remove');
  deleteProductBtns.forEach((removeBtn) =>
    removeBtn.addEventListener('click', removeProduct)
  );

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
