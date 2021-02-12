// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  let subtotal = product.querySelector(".subtotal span");
  let result = price.textContent * quantity.value;
  subtotal.textContent = result;
  return result;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll(".product");
  let subtotals = [];
  products.forEach((product) => subtotals.push(updateSubtotal(product)));

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.textContent = subtotals.reduce((acc, elem) => acc + elem);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  let targetQuantity =
    target.parentNode.previousElementSibling.previousElementSibling
      .childNodes[1];
  targetQuantity.value = "0";
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const creationName = document.querySelector(".create-product input");
  const creationPrice = document.querySelectorAll(".create-product input")[1];
  const cart = document.querySelector("#cart tbody");
  if (creationName.value === "" || creationPrice.value === 0) {
    alert("Please add a product name and a unit price");
  } else {
    let newProdLine = document.createElement("tr");
    cart.appendChild(newProdLine);
    newProdLine.classList.add("product");
    newProdLine.innerHTML += `  <td class="name">
  <span>${creationName.value}</span>
  </td>
  <td class="price">$<span>${creationPrice.value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  </tr>`;
    creationName.value = "";
    creationPrice.value = 0;
    listenToRemoveBtn();
  }
}

function listenToRemoveBtn() {
  const removeBtn = document.querySelectorAll(".product .btn-remove");
  removeBtn.forEach((elem) => elem.addEventListener("click", removeProduct));
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  listenToRemoveBtn();

  const createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", createProduct);
});
