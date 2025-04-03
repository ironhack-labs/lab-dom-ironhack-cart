/* 1. Cálculo de subtotales (updateSubtotal)
Cuando el usuario cambia la cantidad de un producto y hace clic en "Calculate Prices":
-Se obtiene el precio del producto desde la celda .price span.
-Se obtiene la cantidad ingresada desde el <input> dentro de .quantity.
-Se multiplica precio × cantidad para calcular el subtotal.
-Se actualiza el subtotal en la celda correspondiente dentro de .subtotal span.
-Esto se repite para cada producto en la tabla.
*/

// ITERATION 1

function updateSubtotal(product) {
  // Paso 1: Obtener los elementos del DOM que contienen el precio y la cantidad
  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");

  // Paso 2: Extraer los valores de los elementos obtenidos
  const price = parseFloat(priceElement.textContent);
  const quantity = parseInt(quantityElement.value);

  // Paso 3: Calcular el subtotal
  const subtotal = price * quantity;

  // Paso 4: Obtener el elemento del DOM donde se mostrará el subtotal
  const subtotalElement = product.querySelector(".subtotal span");

  // Paso 5: Actualizar el DOM con el nuevo subtotal
  subtotalElement.textContent = subtotal.toFixed(2);

  // Retornar el valor del subtotal
  return subtotal;
}

/* 2. Cálculo del total (calculateAll)
-Se recorre cada fila de producto en la tabla.
-Para cada producto, se llama a updateSubtotal(), que devuelve el subtotal de ese producto.
-Se suman todos los subtotales obtenidos.
-Se actualiza el total general en la celda correspondiente.
-Cada vez que un usuario cambia una cantidad y presiona "Calculate Prices", el total del carrito se recalcula
*/

function calculateAll() {
  // Eliminar código de prueba de la Iteración 1
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // ITERATION 2: Calcular subtotales de todos los productos
  const products = document.getElementsByClassName("product");
  let total = 0;

  for (let product of products) {
    total += updateSubtotal(product);
  }

  // ITERATION 3: Actualizar el total en el DOM
  document.querySelector("#total-value span").innerText = total.toFixed(2);
}

 /*3. Eliminar un producto (removeProduct)
Cuando un usuario presiona el botón "Remove":
Se identifica el producto en el que se hizo clic.
Se elimina la fila correspondiente (tr.product) de la tabla.
Se recalcula el total del carrito para reflejar la eliminación.
Esto permite que el usuario borre productos sin que queden montos desactualizados.*/

// ITERATION 4

// Función para eliminar un producto del carrito
function removeProduct(event) {
  const target = event.currentTarget; // Botón "Remove" que fue clicado
  const productRow = target.closest('.product'); // Obtener la fila del producto

  if (productRow) {
    productRow.remove(); // Eliminar el producto del DOM
    calculateAll(); // Actualizar el total después de eliminar
  }
}

// Función que agrega los event listeners a los botones "Remove"
function addRemoveEventListeners() {
  const removeButtons = document.querySelectorAll('.btn-remove');

  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
}

// Asegurarse de que los event listeners se agreguen al cargar la página
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  addRemoveEventListeners(); // Agregar eventos a los botones "Remove"
});

/* 4. Agregar un nuevo producto (createProduct)
Cuando el usuario escribe un nombre y un precio en los campos de la sección "Create Product" y presiona el botón:
Se obtienen los valores ingresados.
Se crea una nueva fila con la misma estructura que los productos existentes.
Se agrega dinámicamente a la tabla.
Se asigna un evento al botón "Remove" de este nuevo producto para que también pueda eliminarse.
Se limpian los campos del formulario después de agregar el producto.
Se recalcula el total para incluir el nuevo producto. */


// ITERATION 5


// Función para crear un nuevo producto
function createProduct() {
  // Obtener los valores de los inputs
  const productName = document.querySelector('input[placeholder="Product Name"]').value;
  const productPrice = parseFloat(document.querySelector('input[placeholder="Product Price"]').value);

  // Validar que ambos campos tengan valores válidos
  if (productName && !isNaN(productPrice) && productPrice > 0) {
    // Crear una nueva fila <tr> para el producto
    const newProductRow = document.createElement('tr');
    newProductRow.classList.add('product');

  
    newProductRow.innerHTML = `
      <td class="name"><span>${productName}</span></td>
      <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" />
      </td>
      <td class="subtotal">$<span>0.00</span></td>
      <td>
        <button class="btn btn-remove">Remove</button>
      </td>
    `;

    // Agregar la nueva fila a la tabla
    const tableBody = document.querySelector('tbody');
    tableBody.appendChild(newProductRow);

    // Agregar evento "click" al botón "Remove"
    newProductRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

    // Limpiar los campos de entrada
    document.querySelector('input[placeholder="Product Name"]').value = '';
    document.querySelector('input[placeholder="Product Price"]').value = '';

    // Actualizar el total de precios después de añadir un producto
    calculateAll();
  } else {
    alert('Por favor, ingresa un nombre de producto y un precio válido.');
  }
}

// Agregar el evento al botón "Create Product"
document.getElementById('create').addEventListener('click', createProduct);

