// ITERATION 1

document.querySelector("tbody").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-remove")) {
    const productRow = event.target.closest(".product");
    removeProduct(productRow);
  }
});

function updateSubtotal(productRow) {
  const unitPrice = productRow.querySelector(".price span").textContent;
  const quantityValue = productRow.querySelector(".quantity input").value;
  let subtotalValue = unitPrice * quantityValue;

  productRow.querySelector(".subtotal span").textContent =
    subtotalValue.toFixed(2);

  return subtotalValue;
}

function calculateAll() {
  const productList = document.querySelectorAll(".product");
  let totalValue = 0;
  const subtotalElements = document.querySelectorAll(".subtotal");

  for (let index = 0; index < productList.length; index++) {
    let productSubtotal = updateSubtotal(productList[index]);
    totalValue += productSubtotal;
  }

  const totalElement = document.querySelector("#total-value");
  totalElement.textContent = "Total: $" + totalValue.toFixed(2);
}

function removeProduct(productRow) {
  const parentElement = productRow.parentNode;
  parentElement.removeChild(productRow);
}

function createProduct() {
  const productName = document.querySelector(
    '.create-product input[type="text"]',
  ).value;

  const productPrice =
    parseFloat(
      document.querySelector('.create-product input[type="number"]').value,
    ) || 0;

  const newProductRow = document.createElement("tr");
  newProductRow.classList.add("product");

  newProductRow.innerHTML = `
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

  document.querySelector("tbody").appendChild(newProductRow);

  document.querySelector('.create-product input[type="text"]').value = "";
  document.querySelector('.create-product input[type="number"]').value = 0;
}

window.addEventListener("load", () => {
  const calculateButton = document.getElementById("calculate");
  calculateButton.addEventListener("click", calculateAll);
});

window.addEventListener("load", () => {
  const createButton = document.getElementById("create");
  createButton.addEventListener("click", createProduct);
});
