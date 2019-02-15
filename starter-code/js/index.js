function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

  var createDiv = document.createElement("div");
  createDiv.setAttribute("class", "inputdiv");

    //create label
  var createLabel = document.createElement("label");
  createLabel.setAttribute("for", "quantity");
  createLabel.setAttribute("class", "quantity");
  var labelText = document.createTextNode("QTY");
  createLabel.appendChild(labelText);
    //create input
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "number");
  createInput.setAttribute("min", "0");
  createInput.setAttribute("name", "number-units");
  createInput.setAttribute("class", "units");
  createInput.setAttribute("value", "0");
    //append them to div
  createDiv.appendChild(createLabel);
  createDiv.appendChild(createInput);
    //append the div to document
    var col = document.getElementsByClassName("product");
    var arr = [].slice.call(col);
    arr[col.length-1].appendChild(createDiv);
}

function createDeleteButton(){

  var createDiv = document.createElement("div");
    //create delete button
  var createButton = document.createElement("button");
  createButton.setAttribute("class", "btn btn-delete");
  var buttonText = document.createTextNode("Delete");
  createButton.appendChild(buttonText);
    //append them to div
  createDiv.appendChild(createButton);
    //append the div to document
  var col = document.getElementsByClassName("product");
  var arr = [].slice.call(col);
  arr[col.length-1].appendChild(createDiv);
}


function createQuantityNode(){



function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

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
