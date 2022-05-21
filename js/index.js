function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const result = price * quantity;
  product.querySelector('.subtotal span').innerText = result.toFixed(2);
  return result;
}

function calculateAll() {
  const products = Array.from(document.querySelectorAll('#cart .product'));
  document.querySelector('#total-value span').innerText = products.reduce((total, product) => total + updateSubtotal(product), 0).toFixed(2)
}

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
}

function createProduct() {
  const valueText = document.querySelector('.create-product [type="text"]').value.trim();
  const valueNumber = parseInt(document.querySelector('.create-product [type="number"]').value);

  if (!valueText) {
    alert('Por favor, rellena con un nombre el producto del carro');
    return;
  }
  if (!valueNumber) {
    alert('Por favor, introduce una precio al producto superior a 0');
    return;
  }

  const templateProduct = document.querySelector('.templateProduct .product').cloneNode(true);
  templateProduct.querySelector('.price span').innerText = valueNumber.toFixed(2);
  templateProduct.querySelector('.name span').innerText = valueText;
  templateProduct.querySelector('.btn-remove').addEventListener('click', (event) => removeProduct(event));
  
  document.querySelector('#cart tbody').appendChild(templateProduct);

  document.querySelector('.create-product [type="number"]').value = 0;
  document.querySelector('.create-product [type="text"]').value = '';
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
    deleteBtn.addEventListener('click', (event) => removeProduct(event));
  }
}
