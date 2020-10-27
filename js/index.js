// ITERATION 1

function updateSubtotal(product) {
  console.log(product);
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let sum = price * quantity;
  let subtotal = (product.querySelector(".subtotal span").innerHTML = sum);
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let total = 0;
  allProducts.forEach((item) => (total += updateSubtotal(item)));

  // ITERATION 3
  console.log("total", total);

  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target.parentNode);
  const td = target.parentNode;
  const tr = td.parentNode;
  const tableBody = tr.parentNode;
  tableBody.removeChild(tr);
  allProducts = document.querySelectorAll(".product");
  calculateAll();
}

// ITERATION 5

let createBtn = document.querySelector("#create");
createBtn.addEventListener("click", createProduct);

function createProduct(event) {
  //... your code goes here
  event.preventDefault();
  const newPrice = document.querySelector(".createNumber input").value;
  const newName = document.querySelector(".createText input").value;
  console.log(newPrice);
  const tableBody = document.querySelector("tbody");

  let newProduct = `  
<tr class="product">
<td class="name">
  <span>${newName}</span>
</td>
<td class="price">$<span>${newPrice}</span></td>
<td class="quantity">
  <input id="input" type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>`;

  tableBody.innerHTML += newProduct;
  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.forEach((button) =>
    button.addEventListener("click", removeProduct)
  );
  calculateAll();
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.forEach((button) =>
    button.addEventListener("click", removeProduct)
  );
  //... your code goes here
});
