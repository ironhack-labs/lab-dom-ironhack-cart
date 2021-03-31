// ITERATION 1

function updateSubtotal(product) {
  const priceEl = product.querySelector(".price span");
  const quantityEl = product.querySelector(".quantity input");

  const subtotal = Number(priceEl.innerHTML) * Number(quantityEl.value);

  const subtotalEl = product.querySelector(".subtotal span");
  subtotalEl.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.getElementById('product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  let total = 0;
  const products = [...document.getElementsByClassName("product")];
  products.forEach((el) => (total += updateSubtotal(el)));

  // ITERATION 3
  const totalEl = document.querySelector("#total-value span");
  totalEl.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const child = target.parentNode.parentNode;
  const parent = document.querySelector("tbody");
  parent.removeChild(child);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeButtons = [...document.getElementsByClassName("btn-remove")];
  removeButtons.forEach((el) => el.addEventListener("click", removeProduct));

  //... your code goes here
});
