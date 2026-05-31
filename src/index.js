// ITERATION 1

function updateSubtotal(product) {
  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");

  const price = Number(priceElement.textContent);
  const quantity = Number(quantityElement.value);

  const subtotal = price * quantity;

  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.textContent = subtotal;

  return subtotal;
}

// ITERATION 2 & 3

function calculateAll() {
  const products = document.querySelectorAll(".product");

  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  const totalElement = document.querySelector("#total-value span");
  totalElement.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const button = event.currentTarget;
  const productRow = button.parentNode.parentNode;

  productRow.remove();

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector(
    ".create-product input[type='text']"
  );

  const priceInput = document.querySelector(
    ".create-product input[type='number']"
  );

  const productName = nameInput.value;
  const productPrice = priceInput.value;

  if (productName === "" || productPrice === "") {
    return;
  }

  const tbody = document.querySelector("#cart tbody");

  const newRow = document.createElement("tr");
  newRow.classList.add("product");

  newRow.innerHTML = `
    <td class="name">
      <span>${productName}</span>
    </td>
    <td class="price">$<span>${productPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;

  tbody.appendChild(newRow);

  const removeBtn = newRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  nameInput.value = "";
  priceInput.value = "0";
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");

  if (createBtn) {
    createBtn.addEventListener("click", createProduct);
  }
});