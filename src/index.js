// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  console.log(price, quantity);

  const priceValue = price.innerText;
  const quantityValue = quantity.value;

  const subtotalPrice = parseInt(priceValue) * parseInt(quantityValue);
  const subtotalDom = product.querySelector(".subtotal span");

  subtotalDom.innerText = subtotalPrice;

  console.log({ subtotalPrice, priceValue, quantityValue });
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

function createProduct2() {
  const listProducts = document.querySelector("tbody");

  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");
  listProducts.appendChild(newProduct);

  const createProductName = document.createElement("td");
  createProductName.classList.add("name");
  newProduct.appendChild(createProductName);
  const spanName = document.createElement("span");
  const inputSpam = document.querySelector("tfoot input");
  const nameValue = inputSpam.value;
  spanName.innerText = nameValue;
  createProductName.appendChild(spanName);

  const createPrice = document.createElement("td");
  createPrice.classList.add("price");
  newProduct.appendChild(createPrice);
  const inputSpamPrice = document.querySelectorAll("tfoot input")[1].value;
  createPrice.innerHTML = `$<span>${inputSpamPrice}</span>`;
  /* const spanPrice = document.createElement("span");
  
  const nameValuePrice = inputSpamPrice.value;
  spanPrice.innerText = `$${nameValuePrice}.00`;
  createPrice.appendChild(spanPrice); */

  const createQuantity = document.createElement("td");
  createQuantity.classList.add("quantity");
  newProduct.appendChild(createQuantity);
  const inputQuantity = document.createElement("input");
  inputQuantity.setAttribute("value", "0");
  inputQuantity.type = "number";
  createQuantity.appendChild(inputQuantity);

  const createSubtotal = document.createElement("td");
  createSubtotal.classList.add("subtotal");
  newProduct.appendChild(createSubtotal);
  createSubtotal.innerHTML = `$<span>0</span>`;
  /* const nullSubtotal = document.createElement("span");
  nullSubtotal.innerText = "0";

  createSubtotal.appendChild("$");
  createSubtotal.appendChild(nullSubtotal); */

  const createRemoveButton = document.createElement("td");
  createRemoveButton.classList.add("action");
  newProduct.appendChild(createRemoveButton);

  const removeButton = document.createElement("button");
  removeButton.classList.add("btn", "btn-remove");
  removeButton.innerText = "Remove";
  createRemoveButton.appendChild(removeButton);

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

function createProduct() {
  const listProducts = document.querySelector("tbody");

  const newProduct = document.createElement("tr");
  newProduct.classList.add("product");
  listProducts.appendChild(newProduct);

  const title = document.querySelector("tfoot input").value;
  const price = document.querySelectorAll("tfoot input")[1].value;

  newProduct.innerHTML = `<td class="name">
  <span>${title}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
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
