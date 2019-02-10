function deleteItem(e){
  console.log("entra");
  var productDelete = e.currentTarget.parentNode.parentNode;
  var parent = productDelete.parentNode;
  parent.removeChild(productDelete);
  getTotalPrice();
}

function createTotalPriceNode(parent){
  var divTotalProductPrice = document.createElement("div");
  var spanTotalProductPrice = document.createElement("span");
  spanTotalProductPrice.classList.add("product-line-price");
  spanTotalProductPrice.innerText = "0.00";
  divTotalProductPrice.innerText = "$"
  divTotalProductPrice.appendChild(spanTotalProductPrice);
  parent.appendChild(divTotalProductPrice);

}



function getTotalPrice() {
  var totalPrice = 0;
  for(var i= 0; i<document.getElementsByClassName("product-line").length;i++) {
    var productPrice = document.getElementsByClassName("product-price")[i].innerHTML;
    var productQuantity = document.getElementsByClassName("quantity")[i].value;
    var totalLinePrice=parseFloat(productPrice)*productQuantity;
    document.getElementsByClassName("product-line-price")[i].innerHTML = totalLinePrice.toFixed(2);
    totalPrice += totalLinePrice;
  }
  document.querySelector(".total-price").innerHTML = totalPrice.toFixed(2);
}

function createQuantityInput(input){
  input.setAttribute("type","number");
  input.setAttribute("class","quantity");
  input.setAttribute("value","0");
}

function createDeleteButton(parent){
  var divDeleteButton = document.createElement("div");
  var buttonDeleteButton = document.createElement("button");
  buttonDeleteButton.classList.add("btn","btn-delete");
  buttonDeleteButton.innerText = "Delete";
  divDeleteButton.appendChild(buttonDeleteButton);
  parent.appendChild(divDeleteButton);
  buttonDeleteButton.addEventListener("click",deleteItem);
}

function createQuantityNode(parent){
  var divProductQuantity = document.createElement("div");
  var labelProductQuantity = document.createElement("label");
  var inputProductQuantity = document.createElement("input");
  labelProductQuantity.setAttribute("for","quantity");
  labelProductQuantity.innerText = "QTY";
  createQuantityInput(inputProductQuantity);
  divProductQuantity.appendChild(labelProductQuantity);
  divProductQuantity.appendChild(inputProductQuantity);
  parent.appendChild(divProductQuantity);
}

function createItemNode(itemData,parent){
  var divProductName = document.createElement("div");
  var spanProductName = document.createElement("span");
  spanProductName.classList.add("product-name");
  spanProductName.innerText = itemData;
  divProductName.appendChild(spanProductName);
  parent.appendChild(divProductName);
}

function createPriceNode (itemData,parent) {
  var divProductPrice = document.createElement("div");
  var spanProductPrice = document.createElement("span");
  spanProductPrice.classList.add("product-price");
  spanProductPrice.innerText = itemData;
  divProductPrice.innerText = "$"
  divProductPrice.appendChild(spanProductPrice);
  parent.appendChild(divProductPrice);
}

function createNewItemRow(itemName, itemUnitPrice){
  var divProductLine = document.createElement("div");
  divProductLine.setAttribute("class","product-line");
  var before = document.querySelector(".product-line-input");
  var parent = document.querySelector("body");
  parent.insertBefore(divProductLine,before);
  createItemNode(itemName,divProductLine);
  createPriceNode(itemUnitPrice,divProductLine);
  createQuantityNode(divProductLine);
  createTotalPriceNode(divProductLine);
  createDeleteButton(divProductLine);
}

function createNewItem(){
  var newProductName = document.querySelector(".product-name-input").value;
  var newProductPrice = document.querySelector(".product-price-input").value;
  createNewItemRow(newProductName, newProductPrice);
  document.querySelector(".product-name-input").value = "";
  document.querySelector(".product-price-input").value = "";
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
