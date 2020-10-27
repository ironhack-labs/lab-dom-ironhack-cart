// ITERATION 1
"use strict";

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const priceText = price.innerHTML;
  const quantityNum = quantity.value;
  const sum = priceText * quantityNum;

  const subTotal = product.querySelector(".subtotal span");
  return (subTotal.innerHTML = sum);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  //  updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll(".product");
  let total = 0;
  allProducts.forEach((el) => {
    let subtotal = updateSubtotal(el);
    total += subtotal;
  });

  const totalValue = document.querySelector("#total-value span");
  return (totalValue.innerHTML = total);
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const cart = document.querySelector(".cart");
  const product = target.parentNode.parentNode;
  cart.removeChild(product);

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(".p-name").value;
  const unitPrice = document.querySelector(".u-price").value;
  const cart = document.querySelector(".cart");
  const tr = document.createElement("tr");
  const insertHTML = `
          <td class="name">
            <span>${productName}</span>
          </td>
          <td class="price">$<span>${unitPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  `;
  const newElement = cart.appendChild(tr);
  newElement.setAttribute("class", ".product");
  newElement.innerHTML = insertHTML;

  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", createProduct);

  //... your code goes here
});
