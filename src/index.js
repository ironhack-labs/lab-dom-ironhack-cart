function updateSubtotal(product) {
  const price = parseFloat(product.querySelector(".price span").textContent);
  const quantity =
    parseInt(product.querySelector(".quantity input").value) || 0;
  let subtotalValue = price * quantity;
  let subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.textContent = subtotalValue.toFixed(2);
  return subtotalValue;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName("product");
  let totalValue = 0;

  for (let i = 0; i < allProducts.length; i++) {
    totalValue += updateSubtotal(allProducts[i]);
  }
  calculateTotal(totalValue);
}

function calculateTotal(totalValue) {
  let totalElement = document.getElementById("total-value");
  totalElement.textContent = `Total: $${totalValue.toFixed(2)}`;
}

function removeProduct(event) {
  const target = event.currentTarget;
  const trElement = target.closest(".product");

  if (trElement) {
    trElement.remove();
    calculateAll();
  }
}

function createProduct() {
  const newProductName = document.querySelector('input[type="text"]').value;
  const priceInput = document.querySelector(
    'input[type="number"][placeholder="Product Price"]'
  );
  const newProductPrice = parseFloat(priceInput.value);

  const tbody = document.getElementsByTagName("tbody")[0];
  const productElement = document.createElement("tr");
  productElement.className = "product";
  productElement.innerHTML = `
    <td class="name"><span>${newProductName}</span></td>
    <td class="price">$<span>${newProductPrice.toFixed(2)}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  tbody.appendChild(productElement);

  document.querySelector('input[type="text"]').value = "";
  priceInput.value = "";

  const quantityInput = productElement.querySelector(".quantity input");
  const removeBtn = productElement.querySelector(".btn-remove");

  quantityInput.addEventListener("input", () => {
    updateSubtotal(productElement);
    calculateAll();
  });

  removeBtn.addEventListener("click", removeProduct);

  calculateAll();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  const createProductBtn = document.getElementById("create");

  calculatePricesBtn.addEventListener("click", calculateAll);
  createProductBtn.addEventListener("click", createProduct);

  attachEventListenersToProducts();
});

function attachEventListenersToProducts() {
  const allProducts = document.getElementsByClassName("product");

  for (let product of allProducts) {
    const quantityInput = product.querySelector(".quantity input");
    const removeBtn = product.querySelector(".btn-remove");

    quantityInput.addEventListener("input", () => {
      updateSubtotal(product);
      calculateAll();
    });

    removeBtn.addEventListener("click", removeProduct);
  }
}
