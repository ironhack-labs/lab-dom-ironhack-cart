function deleteItem(e) {
  document.querySelector(".products").removeChild(e.currentTarget.parentNode.parentNode);
}

function getPriceByProduct(itemNode) {
  
  let nodes = itemNode.querySelectorAll(".price");
    if(nodes.length <= 0) return 0;

  let price = itemNode.querySelector(".price").innerText.substring(1);
  let qty = itemNode.querySelector(".qty").value;
  let totalPriceProd = parseFloat(price) * parseInt(qty);
  itemNode.querySelector(".total-price").innerText ="$" + totalPriceProd ;
  return totalPriceProd;
}

function getTotalPrice() {
  let products = document.querySelectorAll(".product");
  let totalPrice = 0;
  products.forEach(item => (totalPrice += getPriceByProduct(item)));
  document.querySelector(".total").innerText = "$" + totalPrice;
  return totalPrice;
}

function createQuantityInput() {
  let input = document.createElement("input", "QTY");
  input.classList.add("qty")
  input.value = "0";
  input.type = "number";
  return input;
}

function createDeleteButton() {
  let deleteB = document.createElement("button", "Delete");
  let deleteDiv = document.createElement("div", "");
  deleteB.onclick = deleteItem;
  deleteB.classList.add("btn-delete");
  deleteDiv.appendChild(deleteB);
  return deleteDiv;
}

function createQuantityNode() {
  let div = createItemNode("div", "");
  let form = createItemNode("form", "");
  let label= createItemNode("label", "QTY");
  form.appendChild(label);
  form.appendChild(createQuantityInput());
  div.appendChild(form);
  return div;
}

function createItemNode(dataType, itemData) {
  let newN = document.createElement(dataType);
  newN.innerText = itemData;
  return newN;
}

function createNewItemRow(itemName, itemUnitPrice) {
  let newDivProduct = createItemNode("div", "");
  newDivProduct.classList.add("product");

  let divName = createItemNode("div", "");
  let spanName = createItemNode("span", itemName);
  divName.appendChild(spanName);

  let divPrice = createItemNode("div", "");
  let spanPrice = createItemNode("span", "$" + itemUnitPrice);
  spanPrice.classList.add("price");
  divPrice.appendChild(spanPrice);

  let spanTotal = createItemNode("span", "$0");
  let divTotal = createItemNode("div", "");
  spanTotal.classList.add("total-price");
  divTotal.appendChild(spanTotal);
  newDivProduct.appendChild(divName);
  newDivProduct.appendChild(divPrice);
  newDivProduct.appendChild(createQuantityNode());
  newDivProduct.appendChild(divTotal);
  newDivProduct.appendChild(createDeleteButton());
  document.querySelector(".products").insertBefore(newDivProduct, document.querySelector(".products .new-item"));
}

function createNewItem() {
  let newN = document.querySelector(".newn").value;
  let newP = document.querySelector(".newp").value;
  if (newN != "" && newP != "") {
    createNewItemRow(newN, newP);
    document.querySelector(".newn").value = "";
    document.querySelector(".newp").value = "";
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