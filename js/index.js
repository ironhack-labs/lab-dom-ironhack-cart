function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  product.querySelector('.subtotal span').innerText = parseFloat(price) * parseInt(quantity);
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  for (let singleProduct of products) {
    updateSubtotal(singleProduct);
  }
  updateTotalValue();
}

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  updateTotalValue();
}

function updateTotalValue() {
  const subtotal = document.querySelectorAll('.subtotal span');
  document.querySelector('#total-value span').innerText = Array.from(subtotal).reduce((total, subtotal) => total += parseInt(subtotal.innerText), 0)
}

function createProduct() {
  if (!document.querySelector('.create-product [type="text"]').value) {
    alert('Por favor, rellena con un nombre el producto del carro');
    return;
  }
  const templateProduct = document.querySelector('.product').cloneNode(true);
  templateProduct.querySelector('.price span').innerText = document.querySelector('.create-product [type="number"]').value
  templateProduct.querySelector('.name span').innerText = document.querySelector('.create-product [type="text"]').value
  templateProduct.querySelector('.subtotal span').innerText = 0
  templateProduct.querySelector('.quantity input').value = 0
  
  document.querySelector('#cart tbody').appendChild(templateProduct);

  document.querySelector('.create-product [type="number"]').value = 0;
  document.querySelector('.create-product [type="text"]').value = '';
  addDeleteAction();
}

window.addEventListener('DOMContentLoaded', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const createBtn = document.getElementById('create');
  addDeleteAction();
  calculatePricesBtn.addEventListener('click', calculateAll);
  createBtn.addEventListener('click', createProduct)
});

function addDeleteAction() {
  const deleteBtns = document.querySelectorAll('.btn-remove');
  for (let deleteBtn of deleteBtns) {
    deleteBtn.addEventListener('click', removeProduct);
  }
}
