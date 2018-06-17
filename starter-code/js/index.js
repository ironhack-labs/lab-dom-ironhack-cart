

function deleteItem(e){
  parent = document.getElementsByTagName("body")[0];
  
  parent.removeChild(e.currentTarget.parentNode.parentNode);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var total = 0;

  var productPriceArr=document.getElementsByClassName("product-price");
  var quantityArr=document.getElementsByClassName("quantity");
  var totalPriceArr=document.getElementsByClassName("total-price");
  var itemTotal = 0;
  var sumTotal = 0;
 
  for(var i = 0; i < productPriceArr.length; i++){
    itemTotal=parseFloat((productPriceArr[i].innerHTML.slice(1)) * parseInt(quantityArr[i].value));
    totalPriceArr[i].innerHTML="$" + itemTotal;
    sumTotal += itemTotal;
  }
  var totalMsg = document.getElementById("total-money");
  totalMsg.innerHTML = "$"+sumTotal;
 
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(e){
  console.log("hola");
  var parent = document.getElementsByTagName("body")[0];
  var newWrapper=document.createElement("div");
  newWrapper.setAttribute("class", "wrapper");
  
  //create and add name
  var wrapperElement=document.createElement("div");
  wrapperElement.setAttribute("class", "product-name");
  wrapperElement.innerHTML=document.getElementById("new-name").value;
  newWrapper.appendChild(wrapperElement);

  //create and add price
  wrapperElement=document.createElement("div");
  wrapperElement.setAttribute("class", "product-price");
  wrapperElement.innerHTML="$"+parseFloat(document.getElementById("new-price").value).toFixed(2);
  newWrapper.appendChild(wrapperElement);

  //create and add units
  wrapperElement=document.createElement("div");
  wrapperElement.setAttribute("class", "units");
  var innerElement=document.createElement("label");
  innerElement.innerHTML="QTY";
  wrapperElement.appendChild(innerElement);
  innerElement=document.createElement("input");
  innerElement.setAttribute("class", "quantity");
  innerElement.setAttribute("value", "0");
  wrapperElement.appendChild(innerElement);
  newWrapper.appendChild(wrapperElement);

  //create and add total price
  wrapperElement=document.createElement("div");
  wrapperElement.setAttribute("class", "total-price");
  wrapperElement.innerHTML="$0.00";
  newWrapper.appendChild(wrapperElement);

  //create an add the delete button
  wrapperElement=document.createElement("div");
  wrapperElement.setAttribute("class", "delete-button");
  innerElement=document.createElement("button");
  innerElement.setAttribute("class", "btn btn-delete");
  innerElement.innerHTML="Delete";
  innerElement.onclick = deleteItem;
  wrapperElement.appendChild(innerElement);
  newWrapper.appendChild(wrapperElement);

  parent.insertBefore(newWrapper, document.getElementsByClassName("new-wrapper")[0]);

  //clear inputs
  document.getElementById("new-name").value="";
  document.getElementById("new-price").value="";

  
}

window.onload = function(){

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i < deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


var calculatePriceButton = document.getElementById('calc-prices-button');

