// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span").innerText;
  const priceNum = parseFloat(price);
  const quantity = product.querySelector(".quantity input").value;
  const quantityNum = Number(quantity);

  const subTotalPrice = priceNum * quantityNum;

  const subTotalElem = product.querySelector(".subtotal span");
  subTotalElem.innerText = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  const products = document.querySelectorAll(".product");

  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });

  const totalSum = document.querySelector("#total-value span");

  totalSum.innerText = totalPrice;
  return totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const tBodyElem = document.querySelector("tbody");
  tBodyElem.removeChild(target.parentNode.parentNode);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productTitle = document.querySelector("#product-name-input");
  const productPrice = document.querySelector("#product-price-input");

  const clonedProduct = document.querySelector(".product").cloneNode(true);
  clonedProduct.querySelector(".name span").innerText = productTitle.value;
  clonedProduct.querySelector(".price span").innerText = productPrice.value;
  clonedProduct.querySelector(".subtotal span").innerText = "0";

  document.querySelector("tbody").appendChild(clonedProduct);

  productTitle.value = "";
  productPrice.value = "";
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.querySelector("#calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.querySelectorAll(".btn.btn-remove");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  const createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", createProduct);
});