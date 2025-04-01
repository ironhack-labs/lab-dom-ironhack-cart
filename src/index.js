// ITERATION 1
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");

  const price = parseFloat(priceElement.textContent);
  const quantity = parseInt(quantityElement.value);

  const subtotal = price * quantity;

  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.textContent = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");
  let total = 0;

  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  // ITERATION 3
  const totalValue = document.querySelector("#total-value span");
  totalValue.textContent = total.toFixed(2);
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  const productRow = target.parentNode.parentNode;
  const parent = productRow.parentNode;

  parent.removeChild(productRow);

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

  const nameValue = nameInput.value;
  const priceValue = parseFloat(priceInput.value).toFixed(2);

  if (!nameValue || priceValue < 0) return;

  const tbody = document.querySelector("#cart tbody");

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

  tbody.appendChild(newRow);

  const removeBtn = newRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  nameInput.value = "";
  priceInput.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
