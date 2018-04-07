function deleteItem(e){
  var nodeId = e.currentTarget.parentNode.parentNode.id;
  var deleteNode = document.getElementById(nodeId);
  deleteNode.parentNode.removeChild(deleteNode);
  getTotalPrice();

}

function getPriceByProduct(itemNode){
  var sum = 0;
  for (x=0; x < itemNode.length; x++){
    var costNode = document.getElementsByClassName("cost")[x];
    var costPerUnit = costNode.innerHTML.replace("$", "")
    var quantityNode = document.getElementsByTagName("input")[x];
    sum = sum + (costPerUnit * quantityNode.value);
    updatePriceByProduct(costPerUnit * quantityNode.value, x)
  }
  return sum;
}

function updatePriceByProduct(productPrice, index){
  document.getElementsByClassName("total-product-cost")[index].innerHTML = "$" + parseFloat(Math.round(productPrice * 100) / 100).toFixed(2);
}

function getTotalPrice() {
  var items = document.getElementsByClassName("product-name");
  var totalPrice = getPriceByProduct(items);
  var totalPriceNode = document.getElementById("totalPrice");  
  totalPriceNode.childNodes[1].childNodes[1].innerHTML = "$" + parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2)
}

function createQuantityInput(){
  var quantityInput = document.createElement("input");
  quantityInput.setAttribute("class", "product-quantity");
  quantityInput.setAttribute("type", "text");
  quantityInput.setAttribute("value", "0");
  return quantityInput;
}

function createDeleteButton(){
  var deleteButtonDiv = document.createElement("div");
  var deleteButtonNode = document.createElement("button");
  deleteButtonNode.setAttribute("class", "btn btn-delete");
  deleteButtonNode.innerHTML = "Delete";
  deleteButtonDiv.appendChild(deleteButtonNode);
  return deleteButtonDiv;
}

function createTotalCostNode(){
  var totalCostDiv = document.createElement("div");
  var totalCostSpan = document.createElement("span");
  totalCostSpan.setAttribute("class", "total-product-cost");
  totalCostSpan.innerHTML = "$0";
  totalCostDiv.appendChild(totalCostSpan);
  return totalCostDiv;
}

function createQuantityNode(){
  var quantityDiv = document.createElement("div");
  quantityDiv.setAttribute("class", "input-wrapper");
  var quantityLabel = document.createElement("label");
  quantityLabel.innerHTML = "QTY";
  quantityDiv.appendChild(quantityLabel);
  quantityDiv.appendChild(createQuantityInput());
  
  return quantityDiv;
}

function createItemNode(dataType, itemData){
  var productSpan = document.createElement("span");
  productSpan.setAttribute("class", "product-name");
  productSpan.innerHTML = itemData[0].charAt(0).toUpperCase() + itemData[0].slice(1);
  var productDiv = document.createElement("div");
  productDiv.appendChild(productSpan);
  dataType.appendChild(productDiv);

  var costSpan = document.createElement("span");
  costSpan.setAttribute("class", "cost");
  if (itemData[1].charAt(0) === "$"){
    costSpan.innerHTML = itemData[1].charAt(0) + parseFloat(Math.round(itemData[1].slice(1) * 100) / 100).toFixed(2);
  } else {
    costSpan.innerHTML = "$" + parseFloat(Math.round(itemData[1] * 100) / 100).toFixed(2);
  }
  var costDiv = document.createElement("div");
  costDiv.appendChild(costSpan);
  dataType.appendChild(costDiv);

  return;
}

function createNewItemRow(itemName, itemUnitPrice){
  var newItemRow = document.createElement("div");
  newItemRow.setAttribute("id", itemName.toLowerCase());
  newItemRow.setAttribute("class", "item-wrapper");
  createItemNode(newItemRow, [itemName, itemUnitPrice]);
  newItemRow.appendChild(createQuantityNode());
  newItemRow.appendChild(createTotalCostNode());
  newItemRow.appendChild(createDeleteButton());

  return newItemRow;
}

function createNewItem(){
  var item = document.getElementsByClassName("new-item-name");
  var price = document.getElementsByClassName("new-item-price");
  if (item[0].value === "" || price[0].value === "" ){
    return;
  }
  var newItem = createNewItemRow(item[0].value , price[0].value);

  var parent = document.getElementsByTagName('body')[0];
  var firstChild = document.getElementById('insert-point');
  parent.insertBefore(newItem, firstChild);
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

