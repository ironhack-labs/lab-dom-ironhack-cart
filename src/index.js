// 👉 Iteration 1: updateSubtotal
function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const priceValue = parseFloat(price.innerText);
  const quantityValue = parseInt(quantity.value);

  const subtotal = priceValue * quantityValue;

  const subtotalElem = product.querySelector(".subtotal span");
  subtotalElem.innerText = subtotal.toFixed(2);

  return subtotal;
}

// 👉 Iteration 2 + 3: calculateAll and update total
function calculateAll() {
  const allProducts = document.querySelectorAll(".product");
  let total = 0;

  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });

  const totalElem = document.querySelector("#total-value span");
  totalElem.innerText = total.toFixed(2);
}

// 👉 Iteration 4: Remove product
function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.closest(".product");
  const parent = productRow.parentNode;

  parent.removeChild(productRow);

  // Recalcular total después de eliminar
  calculateAll();
}

// 👉 Iteration 5: Create new product
function createProduct() {
  const nameInput = document.querySelector(
    '.create-product input[type="text"]'
  );
  const priceInput = document.querySelector(
    '.create-product input[type="number"]'
  );

  const nameValue = nameInput.value.trim();
  const priceValue = parseFloat(priceInput.value).toFixed(2);

  if (!nameValue || priceValue <= 0) return;

  const tableBody = document.querySelector("#cart tbody");

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

  tableBody.appendChild(newRow);

  // Resetear campos
  nameInput.value = "";
  priceInput.value = 0;

  // Añadir funcionalidad al nuevo botón de remove
  const removeBtn = newRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);
}

// 👉 Setup event listeners when page loads
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  // Event listeners para botones "Remove"
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  // Event listener para botón "Create Product"
  const createBtn = document.getElementById("create");
  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
});
