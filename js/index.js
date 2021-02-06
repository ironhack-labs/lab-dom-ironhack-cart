// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");
  const subtotal = Number(priceElement.innerText) * quantityElement.value;
  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = `${subtotal}`;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");
  //products.forEach((product) => updateSubtotal(product));

  // ITERATION 3
  const totalElement = document.querySelector("#total-value span");
  totalElement.innerText = `${Array.from(products).reduce(
    (sub, product) => sub + updateSubtotal(product),
    0
  )}`;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target to remove is:", target);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const productNameElement = document.querySelectorAll(".create-product input")[0];
  const productPriceElement = document.querySelectorAll(".create-product input")[1];

  const newProductNode = document.createElement("tr");
  newProductNode.className = "product";
  newProductNode.innerHTML = `<td class="name">
  <span>${productNameElement.value}</span>
</td>
<td class="price">$<span>${productPriceElement.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
  const newProductRemoveButton = newProductNode.querySelector(".btn-remove");
  newProductRemoveButton.onclick = (e => removeProduct(e));

  const productListBodyElement = document.querySelector(".product").parentNode;
  productListBodyElement.appendChild(newProductNode);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) =>
    button.onclick = (e => removeProduct(e))
  );

  const createProductButton = document.querySelector("#create");
  createProductButton.addEventListener("click", createProduct);
});
