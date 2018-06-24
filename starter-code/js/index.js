var total = 0; //variables globales para que todas las funciones las puedan acceder
var newDiv = 0;

function deleteItem(e){
  var parent = e.currentTarget.parentNode;
  parent.parentNode.removeChild(parent);
}

function getPriceByProduct(itemNode){
  var span = itemNode.getElementsByTagName('span'); //array spans
  var price = parseInt(span[1].innerHTML); //El precio siempre estan en el segundo span
  var quantity = itemNode.getElementsByTagName('input');
  var subtotal = price * quantity[0].value; //hardcodeado porque el input siempre estan en el mismo lugar
  updatePriceByProduct(subtotal, span[2]); //El span 2 siempre es donde esta el precio total del producto
}

function updatePriceByProduct(productPrice, index){
  index.innerHTML = "$ " + productPrice;
  total += productPrice;
}

function getTotalPrice() {
  var productList = document.getElementById('productList');
  var products = productList.children;
  for (var i = 0; i < products.length; i++)
  {
    getPriceByProduct(products[i]);
  }
  var display = document.getElementById('total');
  display.innerHTML = "Total Price: $ " + total
}

function createQuantityInput(){
  var quantityDiv = document.createElement("div");
  var quantityLabel = document.createElement("label");
  quantityLabel.className = "quantity";
  var qlabelText = document.createTextNode("QTY")
  quantityLabel.appendChild(qlabelText);
  quantityDiv.appendChild(quantityLabel);
  var quantityField = document.createElement("input");
  quantityField.setAttribute("type", "text");
  quantityField.setAttribute("placeholder", 0);
  quantityDiv.appendChild(quantityField);
  newDiv.appendChild(quantityDiv);
}

function createDeleteButton(){
  var delBtnDiv = document.createElement("div");
  delBtnDiv.className = "btn btn-delete";
  var btnText = document.createTextNode("Delete");
  delBtnDiv.appendChild(btnText);
  newDiv.appendChild(delBtnDiv);

}

function createSubtotalNode(){
  var subtotalDiv = document.createElement("div");
  var subtotalSpan = document.createElement("span");
  var subtotal = document.createTextNode("$0.00");
  subtotalSpan.appendChild(subtotal);
  subtotalDiv.appendChild(subtotalSpan);
  newDiv.appendChild(subtotalDiv);

}

function createNewItemRow(itemName, itemUnitPrice){
  //name
  var nameDiv = document.createElement("div");
  var nameSpan = document.createElement("span");
  var name = document.createTextNode(itemName);
  nameSpan.appendChild(name);
  nameDiv.appendChild(nameSpan);
  newDiv.appendChild(nameDiv);
  //price
  var priceDiv = document.createElement("div");
  var priceLabel = document.createElement("label");
  var priceSign = document.createTextNode("$")
  priceLabel.appendChild(priceSign);
  priceDiv.appendChild(priceLabel);
  var priceSpan = document.createElement("span");
  var price = document.createTextNode(itemUnitPrice);
  priceSpan.appendChild(price);
  priceDiv.appendChild(priceSpan);
  newDiv.appendChild(priceDiv);
}

function createNewItem(){
  newDiv = document.createElement("div"); //esta es variable global, para que otras funciones la modifiquen
  newDiv.className = 'product';
  var inputNode = document.getElementById('productList').nextElementSibling;
  var inputTags = inputNode.getElementsByTagName('input');
  var newName = inputTags[0].value;
  var newPrice = inputTags[1].value;
  createNewItemRow(newName,newPrice);
  createQuantityInput();
  createSubtotalNode();
  createDeleteButton();
  document.getElementById('productList').appendChild(newDiv);
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = function (){
    getTotalPrice();
  }

  createItemButton.onclick = function(){
     createNewItem();
  }

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = function(e){
      deleteItem(e);
    }
  }
};
