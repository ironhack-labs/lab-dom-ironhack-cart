// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  let quantity = product.querySelector(".quantity input");
  let price = product.querySelector(".price span");
  let subtotal = product.querySelector(".subtotal span");
  console.log(quantity.value, price, subtotal);
  subtotal.innerText = quantity.value * Number(price.innerText);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // // end of test
  // ITERATION 2
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    updateSubtotal(product);
  });
  // ITERATION 3
  const subtotals = document.querySelectorAll(".subtotal span");
  let sumSubtotals = 0;
  subtotals.forEach((num) => {
    sumSubtotals += Number(num.innerText);
  });
  console.log(sumSubtotals);
  const total = document.querySelector("#total-value span");
  total.innerText = sumSubtotals;
}

// ITERATION 4

function removeProduct(event) {
  console.log("trying!");
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector('.create-product input[type="text"]');
  const price = document.querySelector('.create-product input[type="number"]');
  const newProduct = document.createElement("tr");
  newProduct.className = "product";
  newProduct.innerHTML = `
  <td class="name">
    <span></span>
  </td>
  <td class="price">$<span></span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;

  console.log(newProduct);
  newProduct
    .querySelector(".btn-remove")
    .addEventListener("click", removeProduct);
  newProduct.querySelector(".name").innerText = name.value;
  newProduct.querySelector(".price span").innerText = price.value;
  document.querySelector("tbody").appendChild(newProduct);
}

window.addEventListener("load", () => {
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const createProductBtn = document.querySelector("#create");
  createProductBtn.addEventListener("click", createProduct);

  //... your code goes here
});
