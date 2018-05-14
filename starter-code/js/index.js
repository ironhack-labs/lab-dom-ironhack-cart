function deleteItem(e){
  let products = document.getElementsByClassName("wrapper");
  let parent = document.getElementById("mainParent");
  for(var i = 0; i<products.length ; i++){
    (products[i].children[4].children[0]===this) &&
    (parent.removeChild(products[i]));
  }
}

function getPriceByProduct(itemNode){
  let unitPrice = (itemNode.children[1].innerText).match(/(\d+\.+\d*)|(\.+\d*)|\d/g).join("");
  let quantity = (itemNode.children[2].children[1].value);
  let productPrice = parseFloat(unitPrice)*parseInt(quantity);
  return (isNaN(productPrice))? 0: productPrice;
}

function updatePriceByProduct(productPrice, index){
  let products = document.getElementsByClassName("wrapper");
  (!isNaN(productPrice)) ? 
  (products[index].children[3].innerText = "$"+productPrice):
  (products[index].children[3].innerText = "$0.0");
  return productPrice;
}

function getTotalPrice() {
  let products = document.getElementsByClassName("wrapper");
  let totalPriceLabel = document.getElementById("totalPrice");
  let totalPrice = 0;
  for(var i = 0; i<products.length ; i++){
    totalPrice += updatePriceByProduct(getPriceByProduct(products[i]),i);
  }
  totalPriceLabel.children[0].innerText = "Total Price: "+totalPrice;
}

function createQuantityInput(){
  let inputField = document.createElement("input");
  inputField.setAttribute("class","qtyInput");
  inputField.value = "0";
  return inputField;
}

function createDeleteButton(){
  let mainDiv = document.createElement('div');
  let node = document.createElement("button");
  mainDiv.setAttribute("class","container");
  node.innerText = "Delete";
  node.setAttribute("class","btn btn-delete");
  mainDiv.appendChild(node);
  node.onclick = deleteItem;
  return mainDiv;
}

function createQuantityNode(){
  let mainDiv = document.createElement('div');
  let labelField = document.createElement("label");
  let inputField = createQuantityInput();
  mainDiv.setAttribute("class","container");
  labelField.setAttribute("class","quantity");
  labelField.innerText = "QTY";
  mainDiv.appendChild(labelField);
  mainDiv.appendChild(inputField);
  return mainDiv
}

function createItemNode(dataType, itemData){
  let mainDiv = document.createElement('div');
  let node = document.createElement(dataType);
  mainDiv.setAttribute("class","container");
  node.innerText = itemData;
  mainDiv.appendChild(node);
  return mainDiv;
}

function createNewItemRow(itemName, itemUnitPrice){
  let nameField = createItemNode("span",itemName);
  let priceField = createItemNode("span",itemUnitPrice);
  let quantityField = createQuantityNode();
  let totalPriceField = createItemNode("span","$0");
  let deleteButtonField = createDeleteButton();
  let mainDiv = document.createElement('div');
  mainDiv.setAttribute("class","wrapper");
  mainDiv.appendChild(nameField);
  mainDiv.appendChild(priceField);
  mainDiv.appendChild(quantityField);
  mainDiv.appendChild(totalPriceField);
  mainDiv.appendChild(deleteButtonField);
  return mainDiv;
}

function createNewItem(){
  let parent = document.getElementById("mainParent");
  let newSelector = document.getElementById("newElementSelector");
  let itemName = document.getElementById("newName").value;
  let itemUnitPrice = document.getElementById("newPrice").value;
  let child = createNewItemRow(itemName, itemUnitPrice);
  parent.insertBefore(child,newSelector);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};