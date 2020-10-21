// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price > span').innerText);
  const quantity = Number(product.querySelector('.quantity > input').value);

  product.querySelector('.subtotal > span').innerText = price * quantity;
}

function calculateAll() {
  const products = document.querySelectorAll('.product');

  let total = 0;
  products.forEach(product => {
    updateSubtotal(product);
    total += Number(product.querySelector('.subtotal > span').innerText);
  });

  document.querySelector('#total-value').innerText = `Total: $${total}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const rowToDelete = target.parentNode.parentNode;
  rowToDelete.parentNode.removeChild(rowToDelete);
}

// ITERATION 5

function createProduct() {
  const $baseRow = document.querySelector('.product');
  const $newRow = $baseRow.cloneNode(true);

  const productName = document.querySelector('.create-product input[type=text]').value;
  let productPrice = Number(document.querySelector('.create-product input[type=number]').value);

  if (!(productPrice % 1)) productPrice = `${productPrice}.00`;
  if (productPrice % 1) productPrice = `${Math.floor(productPrice)}.${Math.round(productPrice % 1 * 100)}`;

  $newRow.querySelector('.name > span').innerText = productName;
  $newRow.querySelector('.price > span').innerText = productPrice;
  $baseRow.parentElement.appendChild($newRow);
  //$newRow.querySelector('.quantity > input').value = 

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn.btn-remove').forEach(btn => btn.addEventListener('click', removeProduct));

  const $createBtn = document.getElementById('create');
  $createBtn.addEventListener('click', createProduct);

});

