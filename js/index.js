"use strict";
// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const priceV = price.innerHTML;
  const quantityV = quantity.value;

  const subValue = priceV * quantityV;

  const subtotal = product.querySelector(".subtotal span");

  subtotal.innerHTML = subValue;

  return subValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.querySelectorAll(".product");

  let total = 0;

  products.forEach(function (product) {
    total += updateSubtotal(product);
  });

  let totalEl = document.querySelector("#total-value span");
  totalEl.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  Node.removeChild(subtotal);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach(function (removeBtn) {
    removeBtn.addEventListener("click", removeProduct);
  });
});
