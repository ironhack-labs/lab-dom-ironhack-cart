// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  let subTotalCalc = price.innerHTML * quantity.value;

  let subTotal = product.querySelector(".subtotal span");
  subTotal.innerHTML = subTotalCalc;

  return subTotal;
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  
   let products = document.getElementsByClassName('product');
  // const products = document.querySelectorAll(".product"); 
  let totalSum = document.querySelector('#total-value span');
  // for (let i = 0; i< products.length; i += 1) {
  // updateSubtotal(products[i]);
  // }
  let total = 0;

  for (product of products) {
    total += updateSubtotal(product);
  }
  
  totalSum.innerHTML = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;

  parent.removeChild(row);
}

function createProduct() {
  const newProduct = document.querySelector(".create-product");
  let inputProductName = newProduct.querySelector("input");
  let inputProductNameValue = inputProductName.value;
  let inputProductPrice = newProduct.querySelector("input[type='number']");
  let inputProductPriceValue = inputProductPrice.value;

  const tableRow = document.createElement("tr");
  tableRow.className = "product";
  
  tableRow.innerHTML = `<td class="name">
  <span>${inputProductName}</span>
</td>
<td class="price">$<span>${inputProductPriceValue}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  const tbody = document.querySelector("#cart tbody");
  tbody.appendChild(tableRow);

  const removeButton = tableRow.querySelector(".btn-remove");
  removeButton.addEventListener("click", removeProduct);

  inputProductName.value = "";
  inputProductPrice.value = 0;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createButton = document.getElementById("create");
  createButton.addEventListener("click", createProduct);

  const removeButtons = document.querySelectorAll(".btn-remove");

  for (removeButton of removeButtons) {
    removeButton.addEventListener("click", removeProduct);
  }
});
