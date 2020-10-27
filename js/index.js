"use strict";

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector("input").value;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = (quantity * price).toFixed(2);
}

function calculateAll() {
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((el) => {
    updateSubtotal(el);
  });
}

function sumTotal() {
  //const test = document.querySelector(".subtotal span").innerHTML;
  //console.log("test: "+test);
  const allSubtotals = document.querySelectorAll(".subtotal span");
  //console.log (allSubtotals[0].innerHTML);
  let totalPrice = 0;
  for (let i = 0; i < allSubtotals.length; i++) {
    let subtotal = allSubtotals[i].innerHTML;
    subtotal = Number(subtotal);
    totalPrice += subtotal;
  }
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log("The target in remove is:", target);
  target.parentNode.removeChild(target);
  calculateAll();
  sumTotal();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", sumTotal);
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((el) => {
    el.addEventListener("change", calculateAll);
  });
  const allRemoveBtns = document.querySelectorAll(".btn-remove");
  allRemoveBtns.forEach((el) => {
    el.addEventListener("click", removeProduct);
  });
});
