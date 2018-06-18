
function deleteItem(e){
  
  var bodyNode = document.querySelector("body"); //Body

  var thisParentNode = e.currentTarget.parentNode;
  var thisGrandParentNode = thisParentNode.parentNode;
  //Granparent node es el div del producto a eliminar
  //el producto a elminar es child de body

  bodyNode.removeChild(thisGrandParentNode);

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  //Get price from id=unit-price
  var priceElement = document.getElementsByClassName("unit-price"); //Gets the element Div for price
  var priceElementValue;
  var intPricePerUnit;

  var elementToTest = document.getElementsByClassName("inputBoxes");
  var exactElement;
  var tempVar;

  var totalPerProduct = document.getElementsByClassName("linePrice");

  var accumulator = 0;
  var holder;

  for(var i = 0; i < priceElement.length; i++){
    priceElementValue = priceElement[i].firstChild.firstChild.nodeValue;  //Gets the string value
    intPricePerUnit = parseInt(priceElementValue.replace("$",""));   //Cleans string and makes int

    exactElement = elementToTest[i];
    tempVar = parseInt(exactElement.value);
    
    holder = intPricePerUnit*tempVar;
    totalPerProduct[i].firstChild.innerHTML = "$"+holder;

    accumulator += holder;
  }
  
  //Output
  document.getElementById("total-value").firstChild.nodeValue = "Total price: $"+ accumulator; 
  
}

function createQuantityInput(){
  var inputBox = document.createElement("Input");
  inputBox.setAttribute("type","number");
  inputBox.setAttribute("value","0");
  inputBox.setAttribute("class","inputBoxes");
  
  return inputBox;
}

function createDeleteButton(){
  var newDeleteButtonDiv = document.createElement("div");
  var newDeleteButton = document.createElement("button");
  newDeleteButton.setAttribute("class","btn btn-delete");
  var deleteButonText = document.createTextNode("Delete");
  newDeleteButton.appendChild(deleteButonText); 
  newDeleteButtonDiv.appendChild(newDeleteButton);
  
  return newDeleteButtonDiv;
}

function createQuantityNode(){
  var labelItem = document.createElement("label");
  var textQTY = document.createTextNode("QTY");
  labelItem.appendChild(textQTY);

  var quantityDiv = document.createElement("div");
  quantityDiv.setAttribute("class","quantity");

  var newInputBox = createQuantityInput(); //Returns a new inputbox object

  quantityDiv.appendChild(labelItem);
  quantityDiv.appendChild(newInputBox);
  
  return quantityDiv;
}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

  //Create product name div
  var newProductNameDiv = document.createElement("div"); //This
  var newProductNameSpan = document.createElement("span");
  var newProductName = document.createTextNode(itemName);
  newProductNameSpan.appendChild(newProductName);
  newProductNameDiv.appendChild(newProductNameSpan);

  //Create product price div
  var newPriceDiv = document.createElement("div");
  newPriceDiv.setAttribute("class", "unit-price");
  var newPriceSpan = document.createAttribute("span");
  var newPriceText = document.createTextNode(itemUnitPrice);
  newPriceSpan.appendChild(newPriceText);
  newPriceDiv.appendChild(newPriceSpan);

  //Create quantity div
  var quantityNode = createQuantityNode();

  //Create totalLinePriceNode
  var totalLinePriceDiv= document.createElement("div");
  totalLinePriceDiv.setAttribute("class", "linePrice");
  var totalLinePriceSpan = document.createElement("span");
  var newLinePriceText = document.createTextNode("$0");
  totalLinePriceSpan.appendChild(newLinePriceText);

  //Create deleteButton
  var newButton = createDeleteButton();

  //Append everything
  
}

function createNewItem(){
  var newWrapperNode = document.createElement("div");

  // //Test:  H3 para output de prueba.
  // var testVar = document.getElementsByTagName("h3");
  // testVar[0].firstChild.nodeValue = thisGrandParentNode.tagName;
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn btn-delete');  //Regresa un array con el número de botones

  calculatePriceButton.onclick = getTotalPrice;
  
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;  //Crea un evento para cada boton
  }
};
