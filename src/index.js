// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  console.log(price, quantity);

  const priceValue = price.innerText;
  const quantityValue = quantity.value;

  console.log(priceValue, quantityValue);

  const subtotalPrice = parseInt(priceValue) * parseInt(quantityValue);
  const subtotalDom = product.querySelector(".subtotal span");

  subtotalDom.innerText = subtotalPrice;

  console.log(subtotalPrice);
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const multipleProducts = document.querySelectorAll(".product");

  console.log(multipleProducts);

  let totalPrice = 0;

  multipleProducts.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });

  console.log(totalPrice);

  // ITERATION 3

  const totalDom = document.getElementById("total-value").querySelector("span");
  totalDom.innerText = totalPrice;

  return totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log("The target in remove is:", target);
  target.remove();
}

// ITERATION 5

function createProduct() {
  // - Create tr class(product)
  // - td class(name) - input to span
  // - td class(price) - input to $ + span
  // - td class(quantity) - same as top
  // - td class(subtotal) - same as top
  // - td class(create) to remove class(action)

  const listProducts = document.querySelector("tbody");

  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");
  listProducts.appendChild(newProduct);

  const createProductName = document.createElement("td");
  newProduct.classList.add("name");
  newProduct.appendChild(createProductName);
  const spanName = document.createElement("span");
  const inputSpam = document.querySelector("tfoot input");
  const nameValue = inputSpam.value;
  spanName.innerText = nameValue;
  createProductName.appendChild(spanName);

  const createPrice = document.createElement("td");
  newProduct.classList.add("price");
  newProduct.appendChild(createPrice);
  const spanPrice = document.createElement("span");
  const inputSpamPrice = document.querySelector("tfoot input"[2]); // comorrr????
  const nameValuePrice = inputSpamPrice.value;
  spanPrice.innerText = nameValuePrice;
  createPrice.appendChild(spanPrice);

  const createQuantity = document.createElement("td");
  newProduct.classList.add("quantity");
  newProduct.appendChild(createQuantity);
  const inputQuantity = document.createElement("input");
  inputQuantity.type = "number";
  inputQuantity.placeholder = "0";
  createQuantity.appendChild(inputQuantity);

  const createSubtotal = document.createElement("td");
  newProduct.classList.add("subtotal");
  newProduct.appendChild(createSubtotal);
  const nullSubtotal = document.createElement("span");
  const preTextSubtotal = "$" + "0"; // comorrr????
  createSubtotal.appendChild(preTextSubtotal);

  const createRemoveButton = document.createElement("td");
  newProduct.classList.add("action");
  newProduct.appendChild(createRemoveButton);
  // comorrr????

  console.log(
    newProduct,
    createProductName,
    createPrice,
    createQuantity,
    createSubtotal,
    createRemoveButton,
    listProducts
  );
}

// Event Listeners -----------------------------------------

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});

// REMOVE
// document.querySelectorAll(".btn-remove").addEventListener(click, removeProduct);
// removeItem.addEventListener("click", removeProduct);
const removeItem = document.querySelectorAll(".btn-remove");
removeItem.forEach((button) => {
  button.addEventListener("click", removeProduct);
});

// ADD
const addItem = document.getElementById("create");
addItem.addEventListener("click", createProduct);
