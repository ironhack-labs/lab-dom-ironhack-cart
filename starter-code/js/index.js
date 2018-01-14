function deleteItem(e) {

  
  var pTag = e.currentTarget.parentNode.parentNode;
  //var container = document.getElementById('items-list');
  var container = pTag.parentNode;
  //console.log(pTag);
  //console.log(container);
  container.removeChild(pTag);
  getTotalPrice();

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

//Iteración 1
function getTotalProductPrice() {

  var productsList = document.querySelectorAll(".item");
  for (var i = 0; i < productsList.length; i++) {

    var product = productsList[i];
    var input = product.getElementsByTagName('input')[0];

    if(input.value!=""){

    var price = product.getElementsByClassName('unit-cost')[0].textContent;
    var totalPrice = product.getElementsByClassName('total-price-by-product')[0];

    price = price.split("$")[1];

    var totalPriceCalc = parseFloat(price) * parseFloat(input.value);
    totalPriceCalc = "$" + totalPriceCalc.toFixed(2);
    totalPrice.textContent = totalPriceCalc;
    }
    
  }
}

function getTotalPrice() {

  getTotalProductPrice();

  var totalPrice = document.getElementById("total-price");
  var totalProductsList = document.querySelectorAll(".total-price-by-product");
  var total = 0;

  for (var i = 0; i < totalProductsList.length; i++) {

      total += parseFloat(totalProductsList[i].textContent.split("$")[1]);
  }

  totalPrice.textContent = "$" + total.toFixed(2);
  
}

function createQuantityInput() {

  var element = document.createElement('div');
  element.className = "units-bought";

  var eleLabel = document.createElement('label');
  eleLabel.className = "quantity";
  eleLabel.innerHTML = "QTY";

  var eleName = document.createElement('input');
  eleName.name = "item-quantity";
  eleName.type = "text";

  element.appendChild(eleLabel);
  element.appendChild(eleName);

  return element;

}

function createDeleteButton() {

  var element = document.createElement('div');
  var eleButton = document.createElement('button');
  eleButton.className = "btn btn-delete";
  eleButton.innerHTML = "Delete";
  eleButton.onclick = deleteItem;
  element.appendChild(eleButton);

  return element;

}

function createQuantityNode() {

  var element = document.createElement('div');
  element.className = "total-price-by-product-div";
  var eleSpan = document.createElement('span');
  eleSpan.className = "total-price-by-product";
  eleSpan.innerHTML = "$0.00";
  element.appendChild(eleSpan);

  return element;
}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

  var element = document.createElement('div');
  element.className = "item";

  var eleProductName = document.createElement('div');
  eleProductName.className = "product-name";
  var spanNameTag = document.createElement('span');
  spanNameTag.innerHTML = itemName;
  eleProductName.appendChild(spanNameTag);

  var eleProductCost = document.createElement('div');
  eleProductCost.className = "unit-cost-div";
  var spanUnitPriceTag = document.createElement('span');
  spanUnitPriceTag.className = "unit-cost";
  spanUnitPriceTag.innerHTML = itemUnitPrice;
  eleProductCost.appendChild(spanUnitPriceTag);

  element.appendChild(eleProductName);
  element.appendChild(eleProductCost);
  element.appendChild(createQuantityInput());
  element.appendChild(createQuantityNode());
  element.appendChild(createDeleteButton());

  return element;

}

function createNewItem() {

  var itemName = document.getElementById('add-item-name');
  var itemUnitPrice = document.getElementById('add-item-cost');

  var element = createNewItemRow(itemName.value, itemUnitPrice.value);
  var parent = document.getElementById('items-list');
  parent.appendChild(element);

  itemName.value = "";
  itemUnitPrice.value = "";

  //console.log(parent);

}

window.onload = function () {
var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

};
