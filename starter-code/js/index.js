function deleteItem(e) {
  e.target.parentNode.parentNode.parentNode.removeChild(
    e.target.parentNode.parentNode
  );
}

function getPriceByProduct(itemNode) {
  
  let priceNodes = itemNode
    .getElementsByClassName("price");

    if(priceNodes.length <= 0) return 0;
  
  let price = itemNode
    .getElementsByClassName("price")[0]
    .innerText.substring(1);

  let qty = itemNode.getElementsByClassName("quantity")[0].value;

  let total = parseFloat(price) * parseInt(qty);

  itemNode.getElementsByClassName("total-price-prod")[0].innerText =
    "$" + total;

  return total;
}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let prods = document.querySelectorAll(".product");

  let totalPrice = 0;
  prods.forEach(item => (totalPrice += getPriceByProduct(item)));

  document.querySelector("#total-price").innerText = "$" + totalPrice;

  return totalPrice;
}

function createQuantityInput() {
  let inputQty = createItemNode("input", "");
  inputQty.value = "0";
  inputQty.min = "0";
  inputQty.type = "number";
  inputQty.name = "qty";
  inputQty.classList.add("quantity");

  return inputQty;
}

function createDeleteButton() {
  let divDelete = createItemNode("div", "");
  let btnDelete = createItemNode("button", "Delete");
  btnDelete.classList.add("btn");
  btnDelete.classList.add("btn-delete");
  btnDelete.onclick = deleteItem;
  divDelete.appendChild(btnDelete);
  return divDelete;
}

function createQuantityNode() {
  let divQty = createItemNode("div", "");
  let formQty = createItemNode("form", "");
  let labelQty = createItemNode("label", "QTY");
  formQty.appendChild(labelQty);
  formQty.appendChild(createQuantityInput());
  divQty.appendChild(formQty);
  return divQty;
}

function createItemNode(dataType, itemData) {
  let newNode = document.createElement(dataType);
  newNode.innerText = itemData;
  return newNode;
}

function createNewItemRow(itemName, itemUnitPrice) {
  let divProd = createItemNode("div", "");
  divProd.classList.add("product");

  let divName = createItemNode("div", "");
  let spanName = createItemNode("span", itemName);
  divName.appendChild(spanName);

  let divPrice = createItemNode("div", "");
  let spanPrice = createItemNode("span", "$" + itemUnitPrice);
  spanPrice.classList.add("price");
  divPrice.appendChild(spanPrice);

  let divTotalPrice = createItemNode("div", "");
  let spanTotalPrice = createItemNode("span", "$0");
  spanTotalPrice.classList.add("total-price-prod");
  divTotalPrice.appendChild(spanTotalPrice);

  divProd.appendChild(divName);
  divProd.appendChild(divPrice);
  divProd.appendChild(createQuantityNode());
  divProd.appendChild(divTotalPrice);
  divProd.appendChild(createDeleteButton());

  document
    .querySelector(".products")
    .insertBefore(divProd, document.querySelector(".products .new-product"));
}

function createNewItem() {
  let newName = document.querySelector("#new-name").value;
  let newPrice = document.querySelector("#new-price").value;

  if (newName != "" && newPrice != "") {
    createNewItemRow(newName, newPrice);

    document.querySelector("#new-name").value = "";
    document.querySelector("#new-price").value = "";
  }
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
