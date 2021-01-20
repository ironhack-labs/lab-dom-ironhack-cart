// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;

  product.querySelector('.subtotal > span').innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  
  // ITERATION 2

  let total = 0;

  document.querySelectorAll('.product').forEach(function (product) {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value').innerText = `Total: $${total}`;

  // ITERATION 3

}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  const product = target.parentNode.parentNode;

  product.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {

  let product = document.querySelector('.product');
  let newProduct = product.cloneNode(true);

  newProduct.querySelector('.name span').innerText = document.querySelector('.create-product td input').value;
  newProduct.querySelector('.subtotal span').innerText = 0;
  newProduct.querySelector('.price span').innerText = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value;
  newProduct.querySelector('.action .btn').addEventListener('click', removeProduct);
  let tBody = document.querySelector('tbody');

  tBody.appendChild(newProduct);
  
}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeBtns = document.querySelectorAll('.btn-remove'); 
  removeBtns.forEach((function(button) {
    button.onclick = removeProduct;
  })

  let addBtn = document.querySelector('#create');
  addBtn.addEventListener('click', function () {
  createProduct();

  });

});
