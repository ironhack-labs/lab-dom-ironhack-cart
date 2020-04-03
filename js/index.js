// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  let price = Number(product.querySelector(".price span").innerText);
  let quantity = Number(product.querySelector(".quantity input").value);
  let total = price * quantity;
  product.querySelector(".subtotal span").innerText = String(total);
  return total;
  //... your code goes here
}

function calculateAll() {
  console.log("hey");

  let eachTotal = document.querySelectorAll(".product");
  let total = 0;
  eachTotal.forEach(row => {
    total += updateSubtotal(row);
  });
  let totalPrice = document.querySelector("#total-value span");
  totalPrice.innerText = String(total);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("iciii");
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const target = event.currentTarget;

  let outputName = document.querySelector(".product-name");
  let outputPrice = document.querySelector(".product-price");
  let removeBtn = document.querySelectorAll(".btn-remove");

  let newRow = document.createElement("tr");
  newRow.className = "product";
  newRow.innerHTML = ` <td class="name">
  <span>${outputName.value}</span>
</td>
<td class="price">$<span>${outputPrice.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;

  document.querySelector("tbody").appendChild(newRow);
}

window.addEventListener("click", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  let removeBtn = document.querySelectorAll(".btn-remove");
  let createBtn = document.querySelector("#create");

  createBtn.addEventListener("click", createProduct);

  removeBtn.forEach(btn => {
    btn.addEventListener("click", removeProduct);
  });

  calculatePricesBtn.addEventListener("click", calculateAll);
});
