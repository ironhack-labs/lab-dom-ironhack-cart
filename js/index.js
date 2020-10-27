function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const total = priceValue * quantityValue;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = total;
  return parseFloat(subtotal.innerHTML, 10);
}
function calculateAll() {
  // end of test
  // ITERATION 2
  const manyProducts = document.querySelectorAll(".product");
  let sum = 0;
  manyProducts.forEach(function (el) {
    sum += updateSubtotal(el);
  });
  const total = document.querySelector("#total-value span");
  total.innerHTML = sum;
  // ITERATION 3
  //... your code goes here
}
// ITERATION 4
function removeProduct(event) {
  //console.log("called");
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const parent = target.parentNode.parentNode;
  parent.parentNode.removeChild(parent);
}
// ITERATION 5
function createProduct() {
  const productName = document.querySelector("#productname");
  console.log(productName.value);
  const chosenQuantity = document.querySelector("#price");
  console.log(chosenQuantity.value);
  const table = document.createElement("tr");
  table.className = "product";
  table.innerHTML = `<td class="name">
  <span>${productName.value}</span>
</td>
<td class="price">$<span>${chosenQuantity.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  //console.log(table);
  const tableBody = document.querySelector("tbody");
  tableBody.appendChild(table);
  remove();
}
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const optionalButton = document.querySelector("#create");
  optionalButton.addEventListener("click", createProduct);
});
function remove() {
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(function (el) {
    el.addEventListener("click", removeProduct);
  });
}
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach(function (el) {
    el.addEventListener("click", removeProduct);
  });
});
