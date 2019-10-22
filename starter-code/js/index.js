function deleteItem(e) {
  mainContainer.removeChild(e.currentTarget.parentNode.parentNode);
  getTotalPrice();
}

function updatePriceByProduct(event) {
  let item = event.currentTarget.parentNode.parentNode;
  let unitCost = item.querySelector(".unit-cost");
  let quantity = item.querySelector(".product-quantity");
  let totalPrice = item.querySelector(".totalPrice > span");
  totalPrice.innerText = `${unitCost.lastChild.innerText *
    quantity.querySelector("input").value}`;
  getTotalPrice();
}

function getTotalPrice(e) {
  let mainContainer = document.querySelector(".container");
  let sum = 0;
  for (let item of mainContainer.childNodes) {
    sum += parseInt(item.childNodes[3].innerText.match(/\d+/g));
  }

  let total = document.querySelector("#total > span");
  total.innerText = sum;
}

function createQuantityInput(newProduct) {
  let quantity = document.createElement("div");
  quantity.setAttribute("class", "product-quantity");
  let label = document.createElement("label");
  label.innerText = "QTY";
  quantity.appendChild(label);
  let input = document.createElement("input");
  input.setAttribute("type", "number");
  quantity.appendChild(input);
  input.value = document.getElementById("product-quantity").value;

  newProduct.appendChild(quantity);

  return newProduct;
}

function createDeleteButton(newProduct) {
  let deleteDiv = document.createElement("div");
  let deleteButton = deleteDiv.appendChild(document.createElement("Button"));
  deleteButton.setAttribute("class", "btn btn-delete");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = deleteItem;
  newProduct.appendChild(deleteDiv);

  return newProduct;
}

function totalProductPrice(newProduct) {
  let unitCost = newProduct.querySelector(".unit-cost");
  let quantity = newProduct.querySelector(".product-quantity");

  let totalPrice = document.createElement("div");
  totalPrice.setAttribute("class", "totalPrice");
  totalPrice.appendChild(document.createElement("span"));
  totalPrice.firstChild.innerText = `$ ${unitCost.firstChild.innerText *
    quantity.querySelector("input").value}`;
  newProduct.appendChild(totalPrice);

  return newProduct;
}

function createNewItem() {
  let newProduct = document.createElement("div");
  newProduct.setAttribute("class", "product-container");

  let productName = document.createElement("div");
  productName.setAttribute("class", "product-name");

  let nameLabel = document.createElement("span");
  nameLabel.innerHTML = "Product Name: ";
  productName.appendChild(nameLabel);

  productName.appendChild(document.createElement("span"));
  productName.lastChild.innerText = document.getElementById(
    "product-name"
  ).value;
  newProduct.appendChild(productName);

  let unitCost = document.createElement("div");
  unitCost.setAttribute("class", "unit-cost");

  unitCost.appendChild(document.createElement("span"));
  unitCost.lastChild.innerText = document.getElementById("product-price").value;
  newProduct.appendChild(unitCost);

  let quantity = createQuantityInput(newProduct);
  totalProductPrice(newProduct, unitCost, quantity);
  createDeleteButton(newProduct);

  let input = newProduct.querySelector(".product-quantity > input");
  input.oninput = updatePriceByProduct;

  console.log(input);

  mainContainer.appendChild(newProduct);
  getTotalPrice();
}

window.onload = function() {
  let calculatePriceButton = document.getElementById("calc-prices-button");
  let createItemButton = document.getElementById("new-item-create");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
};

let mainContainer = document.querySelector(".container");
