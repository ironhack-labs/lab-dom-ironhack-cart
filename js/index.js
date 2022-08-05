function updateSubtotal(product) {
  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = price * quantity;
  return (price * quantity);
}

function calculateAll() {
  let total = 0;
  let totalValue = document.querySelector('#total-value span');
  const products = document.getElementsByClassName('product');
  for (const product of products)
    total += updateSubtotal(product);
  totalValue.textContent = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  let parent = target.parentNode;
  document.querySelector('tbody').removeChild(parent.parentNode);
  calculateAll();
}

function createProduct() {
  let name = document.querySelector('tfoot .create-product input[type="text"]').value;
  let price = document.querySelector('tfoot .create-product input[type="number"]').value;
  let template = document.getElementsByClassName('product')[0];
  let newProduct = template.cloneNode(true);
  newProduct.querySelector('.name span').textContent = name;
  newProduct.querySelector('.price span').textContent = price;
  newProduct.querySelector('.quantity input').value = 0;
  newProduct.querySelector('.subtotal span').textContent = 0;
  newProduct.querySelector('.btn-remove').addEventListener('click', removeProduct);
  document.querySelector('tbody').append(newProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (const btn of removeBtns){
    btn.addEventListener('click', removeProduct);
  }

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
