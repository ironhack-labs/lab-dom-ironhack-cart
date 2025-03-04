/*// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test






  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
*/

// ITERATION 1: updateSubtotal
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML; // Get price
  const quantity = product.querySelector('.quantity input').value; // Get quantity

  // Calcular subtotal
  const subtotal = price * quantity;

  // Actualizar el subtotal en el DOM
  product.querySelector('.subtotal span').innerHTML = subtotal.toFixed(2);

  // Retornar el subtotal para que se pueda usar en el cálculo total
  return subtotal;
}

// ITERATION 2: calculateAll
function calculateAll() {
  // Obtener todas las filas de productos
  const allProducts = document.querySelectorAll('.product');

  let totalPrice = 0; // Inicializamos el precio total a 0

  // Iterar sobre todos los productos y calcular sus subtotales
  allProducts.forEach(product => {
    const subtotal = updateSubtotal(product); // Actualizamos el subtotal para cada producto
    totalPrice += subtotal; // Sumamos el subtotal al precio total
  });

  // Actualizar el valor total en el DOM
  document.querySelector('#total-value span').innerHTML = totalPrice.toFixed(2);
}

// ITERATION 3: Total ya calculado en calculateAll

// ITERATION 4: Remover Producto
function removeProduct(event) {
  const target = event.currentTarget; // Obtener el botón que se ha clickeado
  const productRow = target.closest('.product'); // Obtener la fila de producto (tr)
  productRow.remove(); // Remover la fila de producto del DOM

  // Recalcular el total después de remover el producto
  calculateAll();
}

// ITERATION 5: Crear Producto
function createProduct() {
  // Obtener el nombre y el precio del producto desde los campos de entrada
  const productName = document.querySelector('.create-product input[type="text"]').value;
  const productPrice = document.querySelector('.create-product input[type="number"]').value;

  if (!productName || !productPrice || productPrice <= 0) {
    alert("Por favor, ingrese un nombre y un precio válidos para el producto");
    return;
  }

  // Crear una nueva fila de producto en HTML
  const productRow = document.createElement('tr');
  productRow.classList.add('product');
  productRow.innerHTML = `
    <td class="name"><span>${productName}</span></td>
    <td class="price">$<span>${parseFloat(productPrice).toFixed(2)}</span></td>
    <td class="quantity"><input type="number" value="1" min="0" placeholder="Cantidad" /></td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  // Agregar la nueva fila de producto a la tabla
  document.querySelector('#cart tbody').appendChild(productRow);

  // Agregar un event listener al nuevo botón de "Remove"
  const removeButton = productRow.querySelector('.btn-remove');
  removeButton.addEventListener('click', removeProduct);

  // Limpiar los campos de entrada para crear un nuevo producto
  document.querySelector('.create-product input[type="text"]').value = '';
  document.querySelector('.create-product input[type="number"]').value = '';

  // Recalcular el total
  calculateAll();
}

// Event Listeners
window.addEventListener('load', () => {
  // Agregar event listener al botón "Calculate Prices"
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // Agregar event listener al botón "Create Product"
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  // Agregar event listeners a los botones "Remove" ya existentes
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});

