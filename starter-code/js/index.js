function deleteItem(e) {
  var button = e.currentTarget;
  var li = button.parentElement.parentElement;
  var parent = li.parentElement;
  parent.removeChild(li);
  //console.log(e);
  //console.log(li);
  console.log(parent);
}

function getPriceByProduct(itemNode) {
  var priceUd = document.querySelectorAll(".cost-ud span")[itemNode].innerHTML;
  var qty = document.querySelectorAll(".qty input")[itemNode].value;
  var productPrice = priceUd * qty;
  updatePriceByProduct(productPrice, itemNode);
  return productPrice;
}

function updatePriceByProduct(productPrice, index) {
  document.querySelectorAll(".total-price-product span")[index].innerHTML = productPrice;
}

function getTotalPrice() {
  var items = document.getElementsByClassName("product-list").length;
  var totalPrice = 0;
  for (var i = 0; i < items; i++) {
    totalPrice += getPriceByProduct(i);
  }
  document.querySelector("#total-price span").innerHTML = totalPrice;
}

function createQuantityInput() {
  var attrib = {
    type: "number",
    placeholder: 0,
    min:0
  };

  var element = document.createElement("div");
  element.className="qty";
  var label = document.createElement("label");
  label.innerHTML="QTY ";
  var input = document.createElement("input");

  element.className = "qty";
  setAttri(input, attrib);
  element.appendChild(label);
  element.appendChild(input);
  return element;
}

function createDeleteButton() {
  var element = document.createElement("div");
  var button = document.createElement("button");
  button.className = "btn-delete btn";
  button.innerHTML = "Delete";
  button.addEventListener("click",deleteItem);
  element.appendChild(button);
  return element;
}

function createQuantityNode(clasDiv, unitPrice, itemName) {
  var element = document.createElement("div");
  var span = document.createElement("span");
  element.className = clasDiv;
  if (clasDiv === "cost-ud" || clasDiv === "total-price-product") {
    span.className = "dollar";
    if (clasDiv === "cost-ud") {
      span.innerHTML = unitPrice;
    }
  } else {
    span.innerHTML = itemName;
  }
  element.appendChild(span);
  return element;
}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

  var element = document.createElement("li");
  element.className = "product-list";
  element.appendChild(createQuantityNode("product-name", null, itemName));
  element.appendChild(createQuantityNode("cost-ud", itemUnitPrice));
  element.appendChild(createQuantityInput());
  element.appendChild(createQuantityNode("total-price-product"));
  element.appendChild(createDeleteButton());
  return element;
}

function createNewItem() {
  var element = document.getElementsByTagName("ul");
  var itName = document.getElementById("new-product-name").value;
  var itUd = document.getElementById("new-product-price").value;
  var newEl = createNewItemRow(itName, itUd);
  console.log(element);
  element[0].appendChild(newEl);
}

window.onload = function() {
  var calculatePriceButton = document.getElementById('calc-price-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }


};

/* Auxiliar function */
function setAttri(el, atrib) {
  for (var key in atrib) {
    el.setAttribute(key, atrib[key]);
  }
}
