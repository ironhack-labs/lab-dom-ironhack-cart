function deleteItem(e){
  var row = e.target.parentElement;
  row.parentElement.removeChild(row);
}

function getPriceByProduct(itemNode){
  return parseFloat(itemNode.getElementsByClassName("item-price")[0].innerHTML.substr(1));
}

function updatePriceByProduct(productPrice, index){
  var item = document.querySelectorAll(".row .item")[index]

  var quantity = parseInt(item.getElementsByClassName("quantity")[0].value);
  var total = isNaN(quantity) ? 0 : quantity*productPrice;
 
  item.getElementsByClassName("item-total")[0].innerHTML="$"+total.toFixed(2);
}

function getTotalPrice() {
  var nodesTotal = document.querySelectorAll(".item-total");
  var total = 0;
  for(var i=0; i<nodesTotal.length; i++) {
    total+=parseFloat(nodesTotal[i].innerHTML.substr(1));
  }
  
  document.getElementById("total-price").innerHTML = total.toFixed(2);
}

function onQuantityKeyUp(e) {
    var item = e.target.parentElement.parentElement;
    var unitPrice = getPriceByProduct(item);
   
    var node = item.parentElement;
    var index = 0;
    while( (node = node.previousSibling) != null ) index++;

    updatePriceByProduct(unitPrice, index);
}

function createQuantityInput(){
  var input = document.createElement('input');
  input.setAttribute('class', 'quantity');

  input.onkeydown = checkKeyNumerical;
  input.onkeyup = onQuantityKeyUp;

  return input;
}

function createDeleteButton(){
  var btn = document.createElement("div");
  btn.setAttribute("class", "btn btn-delete");
  btn.innerHTML = "Delete";

  btn.onclick = deleteItem;

  return btn;
}

function createQuantityNode(){
  var s = '<div class="item-field item-quantity">QTY</div>';

  var div = document.createElement('div');
  div.innerHTML = s;
  div.firstChild.appendChild(createQuantityInput())
  return div.firstChild;
}

function createItemNode(itemName, itemUnitPrice){
  var nodeItem = document.createElement("div");
  nodeItem.setAttribute("class", "item");
  //name
  var nodeItemName = document.createElement("div");
  nodeItemName.setAttribute("class", "item-field item-name");
  nodeItemName.innerHTML = itemName;
  
  nodeItem.appendChild(nodeItemName);

  //price
  var nodeItemPrice = document.createElement("div");
  nodeItemPrice.setAttribute("class", "item-field item-price");
  nodeItemPrice.innerHTML = "$"+itemUnitPrice.toFixed(2);

  nodeItem.appendChild(nodeItemPrice);

  //quantity
  nodeItem.appendChild(createQuantityNode());

  //total
  var nodeItemTotal = document.createElement("div");
  nodeItemTotal.setAttribute("class", "item-total");
  nodeItemTotal.innerHTML = "$0.00";
  nodeItem.appendChild(nodeItemTotal);

  return nodeItem;
}

function createNewItemRow(itemName, itemUnitPrice){
  var row = document.createElement('div');
  row.setAttribute("class", "row");
  
  row.appendChild(createItemNode(itemName, itemUnitPrice));
  row.appendChild(createDeleteButton());

  document.getElementById('container').appendChild(row);
}

function createNewItem(){
  var name = document.getElementById("new-item-name").value;
  var price = document.getElementById("new-item-price").value;

  var isError = false
  if(name==="") {
     document.getElementById("error-name").innerHTML = "Please enter product name";
     isError = true;
  }

  price = parseFloat(price);
  if(isNaN(price)) {
    document.getElementById("error-price").innerHTML = "Please enter valid price";
    isError = true;
  }

  if(isError) {
    setTimeout(function() {
      document.getElementById("error-price").innerHTML="&nbsp";
      document.getElementById("error-name").innerHTML="&nbsp";
    },2000);
    return;
  } 

  createNewItemRow(name, price);

  document.getElementById("new-item-name").value = "";
  document.getElementById("new-item-price").value = "";
}

window.onload = function(){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  createNewItemRow("IronBubble-head", 25);
  createNewItemRow("IronShirt", 15.25);
  createNewItemRow("IronCup", 10);
};

function checkKeyNumerical(e) {
  // Allow: backspace, delete, tab, escape, enter and 
  if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl/cmd+A
          (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
          (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
          (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
          (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return true;
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
          return false;
      }
      return true;
}
