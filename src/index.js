// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input[type='number']").value;
  let subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = Number(price) * Number(quantity);
}

function calculateTotal(products) {
  let total = 0;
  products.forEach((product) => {
    let subtotalElement = parseFloat(product.querySelector(".subtotal span").innerText);
    total += subtotalElement;
  });
  document.querySelector("#total-value span").innerText = total;
}

function calculateAll() {
  // ITERATION 2
  let products = document.querySelectorAll(".product");
  products.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  calculateTotal(products);
}

// ITERATION 4
function removeProduct(event) {
  const button = event.currentTarget; // botón clicado
  const productRow = button.closest(".product"); // buscar el elemento del producto padre mas cercano
  productRow.remove();
  let products = document.querySelectorAll(".product");
  calculateTotal(products);
}

// ITERATION 5
function createProduct() {
  let tFootName = document.querySelector(".create-product input[type='text']").value;
  let tFootPrice = document.querySelector(".create-product input[type='number']").value;

  let newProduct = document.createElement("tr");
  newProduct.classList.add("product");

  let tdName = document.createElement("td");
  tdName.classList.add("name");
  tdName.innerHTML = `<span>${tFootName}</span>`;

  let tdPrice = document.createElement("td");
  tdPrice.classList.add("price");
  tdPrice.innerHTML = `<span>${tFootPrice}</span>`;

  let tdQuantity = document.createElement("td");
  tdQuantity.classList.add("quantity");
  tdQuantity.innerHTML = '<input type="number" value="0" min="0" placeholder="Quantity"/>';

  let tdSubtotal = document.createElement("td");
  tdSubtotal.classList.add("subtotal");
  tdSubtotal.innerHTML = '<td class="subtotal">$<span>0</span></td>';

  let tdBtnRemove = document.createElement("td");
  tdBtnRemove.classList.add("action");
  tdBtnRemove.innerHTML = '<button class="btn btn-remove">Remove</button>';
  tdBtnRemove.addEventListener("click", removeProduct);  

  newProduct.appendChild(tdName);
  newProduct.appendChild(tdPrice);
  newProduct.appendChild(tdQuantity);
  newProduct.appendChild(tdSubtotal);
  newProduct.appendChild(tdBtnRemove);

  document.querySelector("tbody").appendChild(newProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeProductButtons = document.querySelectorAll(".btn-remove");
  removeProductButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createProductBtn = document.querySelector("#create");
  createProductBtn.addEventListener("click", createProduct);
});
