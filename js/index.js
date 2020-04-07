// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const priceString = product.querySelector(".price span");
  const priceNum = parseInt(priceString.innerHTML);

  const quantity = product.querySelector(".quantity input");

  let subt = priceNum * quantity.value;
  console.log("subt :", subt);

  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerHTML = subt;

  return subt;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalTotal = 0;

  const allItems = document.querySelectorAll(".product");
  allItems.forEach((item) => {
    let subt = updateSubtotal(item);
    totalTotal += subt;
  });

  // ITERATION 3

  const totalShown = document.querySelector("#total-value span");
  totalShown.innerHTML = totalTotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target.parentNode.parentNode);
  const removeProd = target.parentNode.parentNode;
  const tbody = target.parentNode.parentNode.parentNode;

  tbody.removeChild(removeProd);
}

// ITERATION 5

function createProduct() {
  const porName = document.querySelector(".create-product input:first-child");
  const porPrice = document.querySelector(
    ".create-product td:nth-child(2) input"
  );

  const genericRow = document.querySelector("tbody tr");
  const table = document.querySelector("tbody");

  const newRow = genericRow.cloneNode(true);
  table.appendChild(newRow);

  newRow.querySelector(".name span").innerHTML = porName.value;
  newRow.querySelector(".price span").innerHTML = porPrice.value;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  const addPro = document.querySelector("#create");

  addPro.addEventListener("click", createProduct);

  //extra stuff - updates prices when there is any change on the quantity
  const quantity = document.querySelectorAll(".quantity input");
  quantity.forEach((input) => {
    input.addEventListener("change", calculateAll);
  });

  //... your code goes here
});
