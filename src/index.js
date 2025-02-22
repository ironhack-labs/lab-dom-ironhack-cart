 // Espera a que el DOM esté cargado
 

  // Calcula subtotal del primer producto al cargar la página
  const singleProduct = document.querySelector('.product');
  if (singleProduct) {
    updateSubtotal(singleProduct);
  } else {
    console.log('No se encontró el producto en el DOM.');
  };

// Función para extraer valores de precio y cantidad
function extractValues(product) {
  console.log('Extracting values...');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = parseFloat(price.innerText.replace('$', '').trim());
  const quantityValue = parseInt(quantity.value);

  console.log('Price:', priceValue);
  console.log('Quantity:', quantityValue);

  return { priceValue, quantityValue };
}

// Función para actualizar el subtotal de un producto
function updateSubtotal(product) {
  const { priceValue, quantityValue } = extractValues(product);

  if (isNaN(priceValue) || isNaN(quantityValue)) {
    console.log('Error: El precio o la cantidad no son números válidos.');
    return 0; // Retorna 0 si hay error
  }

  const subtotal = priceValue * quantityValue;
  console.log(`El subtotal es: $${subtotal}`);

  // Actualiza el subtotal en el HTML
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotal.toFixed(2); // Muestra con 2 decimales

  return subtotal;
}

// Función para calcular el total de todos los productos
function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;

  products.forEach(product => {
    total += updateSubtotal(product);
  });

  // Actualiza el total general
  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerText = total.toFixed(2);

  console.log(`Total general: $${total}`);
}


function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productRow = target.closest('.product'); // 👉 Encuentra la fila del producto
  productRow.remove(); // ❌ Elimina la fila del DOM
  calculateAll(); // 💲 Actualiza el total después de eliminar
  //... your code goes here
}

// ITERATION 5

function createProduct() {console.log('Creating new product...');

  // Obtener los inputs
  const nameInput = document.querySelector('.create-product input[type="text"]');
  const priceInput = document.querySelector('.create-product input[type="number"]');

  const nameValue = nameInput.value.trim();
  const unitPriceValue = parseFloat(priceInput.value).toFixed(2);

  // Validación simple
  if (!nameValue || unitPriceValue <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  // Crear nueva fila
  const tbody = document.querySelector('tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  newRow.innerHTML = `
    <td class="name"><span>${nameValue}</span></td>
    <td class="price">$<span>${unitPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  tbody.appendChild(newRow);

  // Añadir event listener al nuevo botón "Remove"
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  // Limpiar los campos de entrada
  nameInput.value = '';
  priceInput.value = 0;
}

// ✅ Event Listener para el botón "Create Product"
window.addEventListener('DOMContentLoaded', () => {
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
window.addEventListener('DOMContentLoaded', () => {
  // Añadir el event listener al botón de calcular precios
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Selecciona todos los botones "Remove"
  const removeButtons = document.querySelectorAll('.btn-remove');

  // Añade el event listener a cada botón "Remove"
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);

   
  });

  
});
