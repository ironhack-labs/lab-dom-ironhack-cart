// ITERATION 1
let totalValue = 0;
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").textContent;
  const qty = product.querySelector(".quantity input").value;
  let subtotal = price * qty;
  product.querySelector(".subtotal span").innerHTML = subtotal;
  totalValue += subtotal;
  console.log(totalValue);

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //console.log(singleProduct);
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //const allProducts = document.querySelectorAll(".product");
  //allProducts.forEach((singleProduct) => updateSubtotal(singleProduct));

  // ITERATION 3
  totalValue = 0;
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((singleProduct) => updateSubtotal(singleProduct));
  document.querySelector("#total-value span").textContent = totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentElement.parentElement.remove();
  calculateAll();
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelectorAll(".create-product td input")[0]
    .value;
  const productPrice = document.querySelectorAll(".create-product td input")[1]
    .value;
  const tableProduct = `
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
  const tbody = document.querySelector("tbody");
  const createRow = document.createElement("tr");
  createRow.classList.add("product");
  createRow.innerHTML = tableProduct;
  tbody.appendChild(createRow);
  document.querySelectorAll(".create-product td input")[0].value = "";
  document.querySelectorAll(".create-product td input")[1].value = "";
  createRow
    .querySelector(".btn-remove")
    .addEventListener("click", removeProduct);

  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((button) =>
    button.addEventListener("click", removeProduct)
  );

  const addProduct = document.getElementById("create");
  addProduct.addEventListener("click", createProduct);
});
