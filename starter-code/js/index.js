function deleteItem(e){
  /*
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var container = document.getElementsByClassName("container");
  var some = document.getElementsByClassName("product-price");
  container.removeChild(some[e]);
  */
  console.log(e);
  var productRow = e.target.parentElement;
  console.log(productRow);
  var masterContainerChild = productRow.parentElement;
  console.log(masterContainerChild);
  
  masterContainerChild.removeChild(productRow);
  //productRow.parentElement.removeChild(productRow);
  //console.log(e.target.getAttribute('data'));
}

function getPriceByProduct(itemNode){
  /*var price = document.getElementById(itemNode);
  return parseFloat(price.innerHTproduct-priceML);*/
}

function updatePriceByProduct(productPrice, index){
    /*var totalProduct = productPrice * index;
    return document.getElementById("productsum").innerHTML = "$234"+totalProduct;*/
}
/*-----------------------------*/

/*-------------------------------*/
function getTotalPrice() {
  price = document.getElementsByClassName("product-price");
  qtyElement = document.getElementsByClassName("QTY");
  totalPrice = document.getElementsByClassName("productsum");
  var acc = 0;
  for (var i = 0; i < price.length; i++) {
    console.log(parseFloat(price[i].innerHTML));
    console.log(parseFloat(qtyElement[i].value)); 
    multiply = parseFloat(price[i].innerHTML) * parseFloat(qtyElement[i].value);
    totalPrice[i].innerHTML = "$"+multiply;
    acc += multiply;
  }
  document.getElementById("finalPriceDisplay").innerHTML = "$"+acc;
}
  
function createQuantityInput(){
    var qtyInput = document.createElement("input");
    qtyInput.classList.add("QTY");
    return qtyInput;
  }

function createDeleteButton(){
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("DELETE");
  btn.appendChild(t);
  btn.classList.add("btn-delete");
  btn.classList.add("btn");
  console.log("created button");
  var deleteButtons = document.getElementsByClassName('btn-delete');
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].addEventListener('click', deleteItem);
    }
  return btn;
}

function createPriceNode() {
  var inputPrice = document.getElementById("p-price").value;
  var priceNode = document.createElement("span");
  var t = document.createTextNode(inputPrice+"$");
  priceNode.appendChild(t);
  priceNode.classList.add("product-price");
  return priceNode;
}

function createTotalPriceNode() {
  var totalPriceNode = document.createElement("span");
  var t = document.createTextNode("$0.00");
  totalPriceNode.appendChild(t);
  totalPriceNode.classList.add("productsum");
  return totalPriceNode;
}

function createQuantityNode(){
   
}

function createItemNode(dataType, itemData){
  var inputName = document.getElementById("p-name").value;
  var pName = document.createElement("span");
  var t = document.createTextNode(inputName);
  pName.appendChild(t);
  return pName;
}

function createNewItemRow(itemName, itemUnitPrice){
 var totalPriceNodeCall = createTotalPriceNode();
 var deleteButtonCall = createDeleteButton();
 var qtyInputCall = createQuantityInput();
 var priceNodeCall = createPriceNode();
 var pNameCall = createItemNode();
 var newItemRow = document.createElement("DIV");
      newItemRow.appendChild(pNameCall);
      newItemRow.appendChild(priceNodeCall);
      newItemRow.appendChild(qtyInputCall);
      newItemRow.appendChild(totalPriceNodeCall);
      newItemRow.appendChild(deleteButtonCall);
 var masterContainer = document.getElementById("appendContainer");
 newItemRow.classList.add("container");
 return masterContainer.appendChild(newItemRow); 
}

function createNewItem(){
  createNewItemRow();
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;
  
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].addEventListener('click', deleteItem)
  }
};
