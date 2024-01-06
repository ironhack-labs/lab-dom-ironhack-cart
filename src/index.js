// ITERATION 1

function updateSubtotal(product) {
  const priceElement = Number(product.querySelector(".price span").innerHTML);
  const quantityElement = Number(
    product.querySelector(".quantity input").value
  );

  const subtotalElement = product.querySelector(".subtotal span");
  const subtotal =
    typeof priceElement === "number" && typeof quantityElement === "number"
      ? priceElement * quantityElement
      : 0;
  subtotalElement.innerHTML = `${subtotal.toFixed(2)}`;
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll("tr.product");
  let total = 0;
  products.forEach((product) => (total += updateSubtotal(product)));

  // ITERATION 3
  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML = `${total.toFixed(2)}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// ITERATION 5

function createProduct() {
  const productNameElement = document.querySelector(
    ".create-product input[type='text']"
  );
  const productPriceElement = document.querySelector(
    ".create-product input[type='number']"
  );

  const productName = productNameElement.value;
  const productPrice = Number(productPriceElement.value);

  if (productName === "" || typeof productPrice !== "number") return;

  const row = document.createElement("tr");
  row.classList.add("product");
  const nameCell = document.createElement("td");
  nameCell.innerHTML = `<span>${productName}</span>`;
  nameCell.classList.add("name");
  const priceCell = document.createElement("td");
  priceCell.innerHTML = `$<span>${productPrice.toFixed(2)}</span>`;
  priceCell.classList.add("price");
  const quantityCell = document.createElement("td");
  quantityCell.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;
  quantityCell.classList.add("quantity");
  const subtotalCell = document.createElement("td");
  subtotalCell.innerHTML = `$<span>0.00</span>`;
  subtotalCell.classList.add("subtotal");
  const actionCell = document.createElement("td");
  actionCell.innerHTML = `<button class="btn btn-remove">Remove</button>`;
  actionCell.classList.add("action");
  actionCell.firstChild.addEventListener("click", removeProduct);
  row.append(nameCell, priceCell, quantityCell, subtotalCell, actionCell);

  document.querySelector("#cart tbody").appendChild(row);

  productNameElement.value = "";
  productPriceElement.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) =>
    button.addEventListener("click", removeProduct)
  );

  const createProductButton = document.querySelector(".create-product #create");
  createProductButton.addEventListener("click", createProduct);
});
