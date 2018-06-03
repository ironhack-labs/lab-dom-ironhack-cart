function deleteItem(e) {
  e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode) {
  return parseFloat(itemNode.textContent);
}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {
  //TODO: mejorar control de errores
  var amounts = document.getElementsByClassName("qty");
  var prices = document.getElementsByClassName("cost");
  var subTotal = document.getElementsByClassName("total");
  var grandTotal = document.getElementById("total-price");
  var total = 0.0, tempSubTotal= 0.0;

  for (var i = 0; i < prices.length; i++) {
    tempSubTotal= (parseFloat(amounts[i].value) * 
                   parseFloat(prices[i].textContent.substr(1, prices[i].textContent.length))).toFixed(2);
    
    if (tempSubTotal > 0){total += parseFloat(tempSubTotal); }

    if (tempSubTotal > 0){subTotal[i].textContent ="$"+ tempSubTotal;}
    else{subTotal[i].textContent ="$0.00";}
  }
  if (total > 0) {grandTotal.textContent = "$"+total;}
  else{grandTotal.textContent = "$0.00";}
}

function createQuantityInput() {
  var newDiv = document.createElement("div");
  var newLabel = document.createElement("label");
  var newInput = document.createElement("input");

  newLabel.innerHTML = "QTY";
  newInput.setAttribute("type", "number");
  newInput.setAttribute("class", "qty");
  newDiv.appendChild(newLabel);
  newDiv.appendChild(newInput);


  return newDiv;
}

function createDeleteButton() {
  var newDiv = document.createElement("div");
  var newButton = document.createElement("button");

  newButton.setAttribute("class", "btn-delete btn");
  newButton.innerHTML = "delete";
  newButton.onclick = deleteItem; 
  newDiv.appendChild(newButton);

  return newDiv;
}

function createQuantityNode() {

} 

function createItemNode(dataType, itemData) {
}

function createNewItemRow(itemName, itemUnitPrice) {
  var newItem = document.createElement("li");

  var newDivName = document.createElement("div");
  var newDivPrice = document.createElement("div");
  var newDivResult = document.createElement("div");
  var newSpanName = document.createElement("span");
  var newSpanPrice = document.createElement("span");
  var newSpanResult = document.createElement("span");
 
  newSpanName.innerHTML = itemName;
  newSpanPrice.innerHTML = "$"+parseFloat(itemUnitPrice).toFixed(2);
  newSpanResult.innerHTML = "$0.00";
 
  newDivName.appendChild(newSpanName);
  newDivPrice.appendChild(newSpanPrice);
  newDivResult.appendChild(newSpanResult);

  newDivPrice.setAttribute("class", "cost");
  newDivResult.setAttribute("class", "total");

  newItem.appendChild(newDivName);
  newItem.appendChild(newDivPrice);
  newItem.appendChild(createQuantityInput());
  newItem.appendChild(newDivResult);
  newItem.appendChild(createDeleteButton());
  newItem.setAttribute("class", "invoice-line");
  return newItem;
}

function createNewItem() {
  var invoiceItems = document.getElementById("invoice-items");
  var textItem = document.getElementById("text-new-item");
  var costItem = document.getElementById("cost-new-item");
 
  if(textItem.value>"" && costItem.value>0){
    invoiceItems.appendChild(createNewItemRow(textItem.value, costItem.value));
    textItem.value="";
    costItem.value="";
  }else{
    alert("To save the product, complete the data correctly")
  }
}

window.onload = function () {
  var calculatePriceButton = document.getElementById("btn-success");
  var createItemButton = document.getElementById("btn-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) { 
    deleteButtons[i].onclick = deleteItem; 
  }
};