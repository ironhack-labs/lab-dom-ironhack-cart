function deleteItem(){
  console.log(this, "entered deleteItem")
  document.getElementById("products").removeChild(this.parentElement.parentElement); 
  /*this.parentElement.removeChild(this);*/
}

function getPriceByProduct(itemNode){
  //get the price and the quantity
 
}

function updatePriceByProduct(el){


}

function getTotalPrice() {
/*para cada producto sumar (precio por qty) en un total 
poner el total en la columna */ 
}

function createQuantityInput(){
  //create the label element and appends QTY and input form to it 
  var quantityForm = createItemNode("form",{"action":"#"});
  var quantityLabel = document.createElement("label");
  quantityLabel.innerHTML= "QTY";

  quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.class = "quantity-number";
  quantityInput.defaultValue = "1";
  
  quantityLabel.appendChild(quantityInput);
  quantityForm.appendChild(quantityLabel);
  
  return quantityForm;
}

function createDeleteButton(){
  //Creates and returns a div with a <a> tag containing a delete button
  var deleteButtonDiv =createItemNode("div", {"class":"button-delete"});
  var deleteButtonA =createItemNode("a", {"href":"#","id":"", "onclick": "deleteItem()","class":"btn btn-delete","innerHTML":"Delete"});
  deleteButtonDiv.appendChild(deleteButtonA);
  console.log(deleteButtonA)
  return deleteButtonDiv;
}

function createQuantityNode(){
  var quantityDiv = createItemNode("div", {"class":"quantity"});
  quantityFormInput = createQuantityInput();
  quantityDiv.appendChild(quantityFormInput);
  return quantityDiv;
}

function createItemNode(dataType, properties){
  newItemNode = document.createElement(dataType);
   Object.keys(properties).forEach(function(property){
    switch (property) {
      case "innerHTML":
      newItemNode.innerHTML=properties[property];
      case "class":
      newItemNode.class=properties[property];
      case "onclick":
      newItemNode.onclick = properties[property];     
      case "id":
      newItemNode.id = properties[property];
      default:
      newItemNode.setAttribute(property,properties[property]);
    };    
  });
  return newItemNode
}

function createNewItemRow(itemName, itemUnitPrice){
//create a new product div  
  counter = document.getElementById("products").childNodes.length-1;
  var newProductRow = createItemNode("div", {"class":"product", "id":"product"+counter})  
  var productName = createItemNode("div", {"class":"product-name"});
  var spanName = createItemNode("span",{"innerHTML":itemName});
  productName.appendChild(spanName);
  
  var productPrice = createItemNode("div", {"class":"price"});
  var spanPrice = createItemNode("span", {"innerHTML":itemUnitPrice});
  productPrice.appendChild(spanPrice);
  
  defaultQuantity = 1
  priceByProductDiv = createItemNode("div",{"class" : "price-by-product"});
  priceByProductSpan = createItemNode("span",{"innerHTML":defaultQuantity*itemUnitPrice});
  priceByProductDiv.appendChild(priceByProductSpan);
  
  newProductRow.appendChild(productName);
  newProductRow.appendChild(productPrice);
  newProductRow.appendChild(priceByProductDiv);

  return newProductRow
}


function createNewItem(){
  //get the name and price of the new item
var pName= document.getElementById("item-name").value;
var pPrice= document.getElementById("item-price").value;

// create the row DOM element within which we have the name and price 
productRow= createNewItemRow(pName, pPrice);

//append to the row the quantity DOM element and the button
productRow.appendChild(createQuantityNode());
productRow.appendChild(createDeleteButton());

//append the new product row to the #products div 
var products = document.getElementById('products');
products.appendChild(productRow)
 
}

window.onload = function(){
  
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var quantities = document.getElementsByClassName('quantity-number');
  productList = document.getElementsByClassName('product');
   
  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  
  for(var i = 0; i<deleteButtons.length ; i++){
    console.log(productList[i])
    deleteButtons[i].onclick = deleteItem;
    quantities[i].onchange = updatePriceByProduct;
  }
};
