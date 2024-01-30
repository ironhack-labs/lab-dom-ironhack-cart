// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input").value;
  let subtotalPrice = price.textContent * quantity;
  product.querySelector(".subtotal span").textContent = subtotalPrice;
  return subtotalPrice;
  //... your code goes here
}

function calculateAll() {
  let totalPrice = 0;
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });
  document.querySelector("#total-value span").textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  const name = document.querySelector(".create-product input[type=text]").value;
  const price = document.querySelector(
    ".create-product input[type=number]"
  ).value;
  let nameExists = false;
  document.querySelectorAll(".name span").forEach((element) => {
    if (element.textContent===(name)) {
      nameExists = true;
    }
  });
  if (name == "") {
    throw Error("The product should have a name");
  } else if (price == 0) {
    throw Error("The price must be higher than 0");
  } else if (nameExists) {
    throw Error("Duplicated entry");
  }
  const itemsTable = document.querySelector("#cart tbody");
  const row = document.querySelector("#cart tbody .product");
  let newRow = row.cloneNode(true);
  newRow.querySelector(".name span").textContent = name;
  newRow.querySelector(".price span").textContent = price;
  newRow.querySelector(".quantity input").value = 0;
  itemsTable.appendChild(newRow);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeProductBtn = document.querySelectorAll(".product .btn-remove");
  removeProductBtn.forEach((product) => {
    product.addEventListener("click", removeProduct);
  });

  const createItemBtn = document.getElementById("create");
  createItemBtn.addEventListener("click", createProduct);
});

window.addEventListener("change", () => {
  const removeProductBtn = document.querySelectorAll(".product .btn-remove");
  if (removeProductBtn.length > 1) {
    removeProductBtn.forEach((product) => {
      product.addEventListener("click", removeProduct);
    });
  }
});
