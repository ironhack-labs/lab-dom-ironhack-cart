// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');
  const subtotalElement = product.querySelector('.subtotal span');

  const priceValue = parseFloat(priceElement.textContent) || 0;
  const quantityValue = parseInt(quantityElement.value) || 0;

  const total = priceValue * quantityValue;
  subtotalElement.textContent = total.toFixed(2);

  return total;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach(element => {
    total += updateSubtotal(element);
  });

  // ITERATION 3
  const totalSelector = document.querySelector('#total-value span');
  totalSelector.textContent = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productRow = target.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  console.log('create product clicado');
  const productName = document.querySelector('tfoot .create-product input[type="text"]').value;
  const productPrice = document.querySelector('tfoot .create-product input[type="number"]').value;
  console.log("name", productName);
  console.log("price", productPrice);

  // Creo una plantilla a partir del html de ironhack
  const templateRow = document.querySelector('#cart tbody .product');

  // Clono la template para no modificar la template original
  // el parámetro true es para copiar también el contenido (los hijos)
  const newRow = templateRow.cloneNode(true);

  // Seteo los valores por defecto a la nueva fila clonada
  newRow.querySelector('.quantity input').value = 0;
  newRow.querySelector('.subtotal span').textContent = 0;

  // añado al clon los valores que leo del formulario
  newRow.querySelector('.name span').textContent = productName;
  newRow.querySelector('.price span').textContent = productPrice;

  // Añado la fila 
  document.querySelector('#cart tbody').appendChild(newRow);

  // Asignar el evento onclick al botón REMOVE
  const removeButton = newRow.querySelector('.btn-remove');
  removeButton.onclick = () => {
    newRow.remove();
    calculateAll();
  };

  // Limpiar fila después de añadir el producto
  document.querySelector('tfoot .create-product input[type="text"]').value = '';
  document.querySelector('tfoot .create-product input[type="number"]').value = '0';


}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtn = document.querySelectorAll('.btn.btn-remove');
  removeProductBtn.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
