function generateRowValues(e) {
  creatorRow = e.currentTarget.parentElement.parentElement;
  productName = `<span>${creatorRow.children[0].children[0].value}</span>`;
  unitPrice = `$<span>${creatorRow.children[1].children[0].value}</span>`;
  quantity = `<input type="number" value="0" min="0" placeholder="Quantity" />`;
  subtotal = `$<span>0</span>`;
  action = document.createElement("button");
  action.addEventListener("click", e => removeProduct(e));
  action.classList.add("btn", "btn-remove");
  action.innerText = "Remove";

  row = document.createElement("tr");
  row.classList.add("product");

  nameCell = document.createElement("td");
  nameCell.classList.add("name");
  nameCell.innerHTML = productName;

  priceCell = document.createElement("td");
  priceCell.classList.add("price");
  priceCell.innerHTML = unitPrice;

  quantityCell = document.createElement("td");
  quantityCell.classList.add("quantity");
  quantityCell.innerHTML = quantity;

  subtotalCell = document.createElement("td");
  subtotalCell.classList.add("subtotal");
  subtotalCell.innerHTML = subtotal;

  actionCell = document.createElement("td");
  actionCell.classList.add("action");
  actionCell.appendChild(action);

  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(quantityCell);
  row.appendChild(subtotalCell);
  row.appendChild(actionCell);

  console.log(row);

  let tableBody = document.querySelector("tbody");
  tableBody.appendChild(row);
}

// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = product.querySelector(".subtotal span").innerText;
  product.querySelector(".subtotal span").innerText = price * quantity;
  return price * quantity;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll(".product");
  const totalElement = document.querySelector("#total-value span");
  let total = 0;
  products.forEach(product => {
    total += updateSubtotal(product);
  });
  totalElement.innerText = total;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  row = target.parentElement.parentElement;
  row.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(button => {
    button.addEventListener("click", e => removeProduct(e));
  });

  const createProduct = document.querySelector("#create");
  createProduct.addEventListener("click", e => {
    generateRowValues(e);
  });
});
