// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector(".price span").innerHTML);
  const quantity =
    parseInt(product.querySelector(".quantity input").value) || 0;

  const subtotal = price * quantity;

  product.querySelector(".subtotal span").innerHTML = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let total = 0;

  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  // El botón está dentro de un <td> que está dentro de un <tr>
  const productRow = target.parentNode.parentNode;
  const tbody = productRow.parentNode;

  // Eliminamos la fila completa
  tbody.removeChild(productRow);

  // Recalculamos el total sin este producto
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const createRow = document.querySelector(".create-product");
  const nameInput = createRow.querySelector('input[type="text"]');
  const priceInput = createRow.querySelector('input[type="number"]');

  const nameValue = nameInput.value;
  const priceValue = parseFloat(priceInput.value).toFixed(2);

  // Evitar crear un producto si el nombre está vacío
  if (!nameValue) {
    alert("Por favor introduce un nombre de producto");
    return;
  }

  // Crear la nueva fila
  const newRow = document.createElement("tr");
  newRow.classList.add("product");
  newRow.innerHTML = `
    <td class="name">
      <span>${nameValue}</span>
    </td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  // Añadir la fila a la tabla
  const tbody = document.querySelector("#cart tbody");
  tbody.appendChild(newRow);

  // Asignar el evento de borrar al nuevo botón
  const newRemoveBtn = newRow.querySelector(".btn-remove");
  newRemoveBtn.addEventListener("click", removeProduct);

  // Limpiar los inputs
  nameInput.value = "";
  priceInput.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  // Añadir evento click a todos los botones "Remove" iniciales
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  // Añadir evento click al botón "Create Product"
  const createBtn = document.getElementById("create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
});