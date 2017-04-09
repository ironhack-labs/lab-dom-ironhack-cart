function deleteItem(e){
    var container = document.getElementById("container");
    var button = e.currentTarget;
    var item = button.parentNode.parentNode;
    container.removeChild(item);
}

function getPriceByProduct(itemNode){
    var priceNode = itemNode.getElementsByClassName("col")[1];
    return parseFloat(priceNode.getElementsByTagName("span")[0].getAttribute("value"));
}

function getQuantityByProduct(itemNode){
    var qtyNode = itemNode.getElementsByClassName("col")[2];
    return qtyNode.getElementsByTagName("input")[0].value;
}

function getTotalPriceByProduct(itemNode){
    var totalPriceNode = itemNode.getElementsByClassName("col")[3];
    return parseFloat(totalPriceNode.getElementsByTagName("span")[0].getAttribute("value"));
}

function updateTotalPriceByProduct(itemNode){
    var totalPriceNode = itemNode.getElementsByClassName("col")[3];
    var totalPrice = totalPriceNode.getElementsByTagName("span")[0];
    var value = parseFloat(getPriceByProduct(itemNode)*getQuantityByProduct(itemNode)).toFixed(2);
    totalPrice.setAttribute("value", value);
    totalPrice.innerHTML = "$" + value;      
}

function getTotalPrice(){
    var items = document.getElementsByName("product");
    items.forEach(function(e){ updateTotalPriceByProduct(e); });
    
    var granTotal = 0;
    items.forEach(function(e){ granTotal += parseInt(getTotalPriceByProduct(e)); });
    
    document.getElementById("gran-total").innerText = "$" + parseFloat(granTotal).toFixed(2);
}

function createQuantityInput(){
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "quantity");
    input.setAttribute("value", 0);
    return input;
}

function createDeleteButton(){
    var delNode = document.createElement("div");
    var delButton = document.createElement("button");
    
    delButton.setAttribute("class", "btn btn-delete");
    delButton.innerText = "Delete";
    delButton.onclick = deleteItem;
    
    delNode.setAttribute("class","col");
    delNode.appendChild(delButton);
    
    return delNode;
}

function createQuantityNode(){
    var qtyNode = document.createElement("div");
    qtyNode.setAttribute("class","col");
    
    var label = document.createElement("label");
    label.innerHTML = "QTY ";
    
    qtyNode.appendChild(label);
    qtyNode.appendChild(createQuantityInput());
    
    return qtyNode;
}

function createItemNode(dataType, itemData, innerText){
    var node = document.createElement("div");
    node.setAttribute("class","col");
    
    var span = document.createElement("span");
    span.setAttribute("name", dataType);
    span.setAttribute("value", itemData);
    span.innerText = innerText;
    
    node.appendChild(span);
    
    return node;    
}

function createNewItem(itemName, itemUnitPrice){
    var item = document.createElement("div");
    item.setAttribute("class", "item");
    item.setAttribute("name", "product");
    
    item.appendChild(createItemNode("name","",itemName));
    item.appendChild(createItemNode("price",itemUnitPrice,"$"+itemUnitPrice));
    item.appendChild(createQuantityNode());
    item.appendChild(createItemNode("total-price",0,"$0.00"));
    item.appendChild(createDeleteButton());
    return item;
}

function createNewItemRow(){
    var container = document.getElementById("container");
    var inputName = document.getElementById("name");
    var inputPrice = document.getElementById("price");
    container.appendChild(createNewItem(inputName.value, parseFloat(inputPrice.value).toFixed(2)));
    inputName.value = "";
    inputPrice.value = "";
}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  
  var createItemButton = document.getElementById('new-item-create');
  
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItemRow;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
