// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const priceValue = Number(price.textContent);
  const quantityValue = Number(quantity.value);
  const subtotalValue = priceValue * quantityValue;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.textContent = subtotalValue.toFixed(2);
  return subtotalValue;
}

// ITERATION 2
function updateAllSubtotals() {
  const products = document.getElementsByClassName("product");
  let subtotals = [];

  for (let product of products) {
    subtotals.push(updateSubtotal(product));
  }

  return subtotals;
}

// ITERATION 3
function calculateAll() {
  const subtotals = updateAllSubtotals();
  const total = subtotals.reduce((sum, value) => sum + value, 0);

  const totalHeading = document.querySelector("#total-value span");
  totalHeading.textContent = total.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  const productRow = event.currentTarget.closest(".product");
  productRow.parentNode.removeChild(productRow);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const nameInput = document.querySelector(
    '.create-product input[type="text"]'
  );
  const priceInput = document.querySelector(
    '.create-product input[type="number"]'
  );

  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value).toFixed(2);

  if (!name || isNaN(price)) return;

  const tbody = document.querySelector("#cart tbody");
  const newRow = document.createElement("tr");
  newRow.className = "product";
  newRow.innerHTML = `
    <td class="name"><span>${name}</span></td>
    <td class="price">$<span>${price}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;
  tbody.appendChild(newRow);

  const removeBtn = newRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  nameInput.value = "";
  priceInput.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((btn) => btn.addEventListener("click", removeProduct));

  const createBtn = document.getElementById("create");
  if (createBtn) createBtn.addEventListener("click", createProduct);
});
