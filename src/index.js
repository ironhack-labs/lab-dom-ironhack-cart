// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Paso 1: Obtén los elementos DOM para el precio y la cantidad
  const priceElement = product.querySelector('.price span');
  const price = priceElement ? parseFloat(priceElement.innerHTML) : 0; // Convierte el precio a número
  const quantityElement = product.querySelector('.quantity input');
  const quantity = quantityElement ? parseInt(quantityElement.value) || 0 : 0; // Convierte la cantidad a número, usa 0 si está vacío

  // Paso 2: Calcula el subtotal
  const subtotalValue = price * quantity;

  // Paso 3: Actualiza el DOM con el subtotal calculado
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotalValue.toFixed(2); // Formatea el subtotal con dos decimales

  // Paso 4: Devuelve el subtotal calculado
  return subtotalValue;
}

// ITERATION 2 & 3

function calculateAll() {
  // Paso 1: Obtén todos los nodos DOM de las filas de productos
  const products = document.getElementsByClassName('product'); // Obtiene todas las filas con clase 'product'

  // Paso 2: Recorre cada producto y actualiza su subtotal
  let total = 0; // Variable para almacenar el total general
  for (let product of products) {
    total += updateSubtotal(product); // Llama a updateSubtotal para cada producto y suma el subtotal
  }

  // Paso 3: Actualiza el total general en el DOM
  const totalElement = document.querySelector('#total-value span'); // Selecciona el elemento del total
  totalElement.innerHTML = total.toFixed(2); // Formatea el total con dos decimales
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; // Obtén el botón que disparó el evento
  console.log('The target in remove is:', target);

  // Elimina la fila del producto
  const productRow = target.closest('.product'); // Encuentra el elemento padre con la clase 'product'
  productRow.remove();

  // Recalcula el total después de eliminar el producto
  calculateAll();
}

// ITERATION 5

function createProduct() {
  // Obtén los valores de los campos de entrada
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');
  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value).toFixed(2);

  // Verifica que los valores sean válidos
  if (!name || isNaN(price) || price <= 0) {
    alert('Por favor, ingresa un nombre válido y un precio mayor a 0.');
    return;
  }

  // Crea una nueva fila de producto
  const tbody = document.querySelector('#cart tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  // Agrega la nueva fila al tbody
  tbody.appendChild(newRow);

  // Agrega el evento de eliminación al botón "Remove"
  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // Limpia los campos de entrada
  nameInput.value = '';
  priceInput.value = '';
}

// EVENT LISTENERS

window.addEventListener('load', () => {
  // Vincula el botón "Calcular precios" a la función calculateAll
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Vincula los botones "Remove" a la función removeProduct
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });

  // Vincula el botón "Create Product" a la función createProduct
  const createProductBtn = document.getElementById('create');
  if (createProductBtn) {
    createProductBtn.addEventListener('click', createProduct);
  }
});
