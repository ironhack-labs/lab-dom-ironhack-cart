// delete product
function deleteItem(e) {
  var prod = e.currentTarget.parentElement;
  prod.parentElement.removeChild(prod);
}

// calculate sub sum and total sum
function getPriceByProduct(itemNode) {
  var price = document.querySelectorAll(".prod-price")[itemNode];
  var qty = document.querySelectorAll("input")[itemNode];
  var total = parseFloat(price.innerHTML) * qty.value;
  return total;
}
function updatePriceByProduct(productPrice, index) {
  var subSum = document.querySelectorAll(".sub-sum")[index];
  subSum.innerHTML = productPrice.toFixed(2) + " &euro;";
}
function getTotalPrice() {
  var prodArr = document.querySelectorAll(".prod");
  var sum = 0;
  for (var i = 0; i < prodArr.length; i++) {
    var productPrice = getPriceByProduct(i);
    updatePriceByProduct(productPrice, i);
    if (isNaN(productPrice) === false) sum += productPrice;
  }
  document.querySelector("h2 > span").innerHTML = sum.toFixed(2) + " &euro;";
}
function createNewNode(
  dataType,
  attName1 = "",
  attValue1 = "",
  attName2 = "",
  attValue2 = ""
) {
  var node = document.createElement(dataType);
  if (attName1 !== "") node.setAttribute(attName1, attValue1);
  if (attName2 !== "") node.setAttribute(attName2, attValue2);
  return node;
}

// create new product
function createItemNode(parent, itemName, itemUnitPrice) {
  var div = createNewNode("div", "class", "fixed-width");
  div.append(document.createTextNode(itemName));
  var span = createNewNode("span", "class", "prod-price fixed-width");
  span.innerHTML = parseFloat(itemUnitPrice).toFixed(2) + " &euro;";
  parent.appendChild(div);
  parent.appendChild(span);
}

function createQuantityInput(parent) {
  var div = createNewNode("div", "class", "quantity");
  var label = createNewNode("label");
  label.append(document.createTextNode("QTY"));
  var input = createNewNode("input", "type", "0", "value", "0");
  parent.appendChild(div);

  var parentNew = document.querySelectorAll(".quantity")[
    document.querySelectorAll(".quantity").length - 1
  ];
  parentNew.appendChild(label);
  parentNew.appendChild(input);
}

function createQuantityNode(parent) {
  var div = createNewNode("div", "class", "sub-sum fixed-width");
  div.innerHTML = "0.00 &euro;";
  parent.appendChild(div);
}

function createDeleteButton(parent) {
  var button = createNewNode("button", "class", "btn btn-delete");
  button.innerHTML = "Delete";
  parent.appendChild(button);
}

function createNewItemRow(itemName, itemUnitPrice) {
  // element.setAttribute(name, value)
  // document.createElement(tagName)
  // var parent = document.querySelector("main")
  // parent.appendChild(element)
  // var text = document.createTextNode(str)
  // parent.appendChild(text)
  // parent.insertBefore(newNode, beforeNode)

  var divProd = createNewNode("div", "class", "prod");
  var parent = document.querySelector("main");
  var beforeNode = document.querySelector(".new-prod");
  parent.insertBefore(divProd, beforeNode);
  var parentNew = document.querySelectorAll(".prod")[
    document.querySelectorAll(".prod").length - 1
  ];

  createItemNode(parentNew, itemName, itemUnitPrice);
  createQuantityInput(parentNew);
  createQuantityNode(parentNew);
  createDeleteButton(parentNew);
}

function createNewItem() {
  var input = document.querySelectorAll(".new-input");
  createNewItemRow(input[0].value, input[1].value);
  var buttonDelete = document.querySelectorAll(".btn-delete");
  buttonDelete.forEach(btn => (btn.onclick = e => deleteItem(e)));
}

window.onload = function() {
  var buttonCalc = document.getElementById("calc-prices-button");
  var buttonCreate = document.getElementById("create-button");
  var buttonDelete = document.querySelectorAll(".btn-delete");

  buttonCalc.onclick = getTotalPrice;
  buttonCreate.onclick = createNewItem;
  buttonDelete.forEach(btn => (btn.onclick = e => deleteItem(e)));
};
