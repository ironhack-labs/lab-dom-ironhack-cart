// ITERATION 1
function updateSubtotal(product) {
  // 1. Obtener los elementos del DOM
  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");

  // 2. Extraer los valores
  const price = parseFloat(priceElement.innerHTML);
  const quantity = parseInt(quantityElement.value);

  // 3. Calcular el subtotal
  const subtotal = price * quantity;

  // 4 & 5. Obtener el elemento subtotal, actualizarlo y devolver el valor
  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // ITERATION 2: Iterar sobre todos los productos
  const products = document.querySelectorAll(".product");
  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3: Actualizar el valor total en el DOM
  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;

  // Obtener la fila del producto (tr) y eliminarla de su contenedor padre (tbody)
  const productRow = target.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);

  // Recalcular los precios tras eliminar el producto
  calculateAll();
}

// ITERATION 5
function createProduct() {
  // 1. Obtener los inputs de nombre y precio
  const createRow = document.querySelector(".create-product");
  const nameInput = createRow.querySelector('input[type="text"]');
  const priceInput = createRow.querySelector('input[type="number"]');

  const nameValue = nameInput.value;
  const priceValue = priceInput.value;

  // 2. Crear una nueva fila (tr) para el producto
  const newProductRow = document.createElement("tr");
  newProductRow.classList.add("product");

  // 3. Asignar la estructura HTML interna a la nueva fila
  newProductRow.innerHTML = `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${Number(priceValue).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  // 4. Añadir la nueva fila al tbody
  const tbody = document.querySelector("#cart tbody");
  tbody.appendChild(newProductRow);

  // 5. Añadir el event listener al nuevo botón "Remove"
  const removeBtn = newProductRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  // 6. Limpiar los campos de entrada
  nameInput.value = "";
  priceInput.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  // Añadir event listeners a todos los botones "Remove" existentes al cargar
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  // Añadir event listener al botón "Create Product"
  const createProductBtn = document.getElementById("create");
  if (createProductBtn) {
    createProductBtn.addEventListener("click", createProduct);
  }
});
