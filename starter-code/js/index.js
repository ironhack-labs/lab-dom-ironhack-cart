// /////////////////
var body = document.getElementsByTagName("body");
var product1 = document.getElementById("product-1");
var product1Name = document.getElementById("product-1-name");
var product1Price = document.getElementById("product-1-price");
var deleteBtn = document.getElementById("product-1-delete");
var item = document.getElementById("item");

deleteBtn.onclick = function deleteItem(e) {
  console.log("removing row");
  e.currentTarget(product1.parentNode.removeChild(item));
};

//TEST: Click the Delete Button
///////////////////

function getPriceByProduct(itemNode) {
  getPrice = 0;
  for (var i = 0; i < itemNode.length; i++) {
    for (var j = 0; j < itemNode[i].length; j++) {
      if (itemNode[i][j].getAttribute("name") === "price") {
        getPrice = parseInt(itemNode[i][j].getAttribute("value").value);
      }
    }
  }
  return getPrice;
}

//TEST: Uncomment Below
//console.log(getPriceByProduct(item));

///////////////////

function updatePriceByProduct(productPrice, index) {
  var currentPrice = getPriceByProduct(index);
  if (index.getAttribute("name") === "price") {
    currentPrice = productPrice;
    index.innerHTML = currentPrice;
  }
}

///////////////////

var qty = document.getElementById("product-1-qty");
var getTotal = document.getElementById("product-1-total");

qty.oninput = function getTotalPrice(e) {
  var totalPrice = 0;
  for (var i = 0; i < e.currentTarget.parentNode.length; i++) {
    for (var j = 0; j < e.currentTarget.parentNode.length[i].length; j++) {
      if (
        e.currentTarget.parentNode[i][j].getAttribute("name") === "total-price") {
        totalPrice += parseInt(getPriceByProduct(itemNode[i][j]) * parseInt(qty.innerHTML));
      }
    }
    e.currentTarget.parentNode[i][j].getAttribute("total-price").innerHTML = totalPrice;
    return totalPrice;
  }
};

///////////////////

var createButton = document.getElementById("new-item-create");

function createQuantityInput(){
  var makeDiv = document.createElement('div');
  var makeLabel = document.createElement('label');
  var makeInput = document.createElement('input');
  makeDiv.setAttribute("class", "col");
  makeInput.setAttribute("name", "text");
  makeInput.setAttribute("value", "text");
  makeInput.setAttribute("id", "product-" + (parseInt(qty.getAttribute("id")[8])+ 1) +"-total");
  makeInput.setAttribute("type", "text");
  makeLabel.innerHTML="QTY";
  makeDiv./*new product element*/.appendChild(makeDiv);
  makeDiv.appendChild(makeLabel);
  makeDiv.appendChild(makeInput);
}

function createDeleteButton() {
  var makeDiv = document.createElement('div');
  var makeButton= document.createElement('button');
  makeDiv.setAttribute("class", "col");
  makeButton.setAttribute("class", "btn");
  makeButton.setAttribute("class", "btn-delete");
  makeButton.setAttribute("id", "product-" + (parseInt(deleteBtn.getAttribute("id")[8]) + 1) +"-total");
  makeButton.innerHTML="Delete";
  makeDiv./*new product element parentNode*/.appendChild(makeDiv);
  makeDiv.appendChild(makeButton);

}

// /////////////////


function createQuantityNode() {

//No entiendo la definicion de esta function, cree un node de cantidad a la arriba (yo pienso!)

}

///////////////////

function createItemNode(dataType, itemData) {

//tampoco entiendo de que se nesecita para esta function, la instructions son muy breves y no tiene muchas detalles de que hacer

}

///////////////////

function createNewItemRow(itemName, itemUnitPrice){
  var makeDiv = document.createElement('div');
  var makeSpan = document.createElement('span');
  var makeDiv2 = document.createElement('div'); 
  var makeSpan2 = document.createElement('span');
  var newName = document.createTextNode(itemName);
  var newPrice =document.createTextNode(itemUnitPrice);
  makeDiv.setAttribute("class", "col");
  makeDiv2.setAttribute("class", "col");
  makeSpan = setAttribute("name", itemName);
  makeSpan = setAttribute("id", "product-" + (parseInt(product1Name.getAttribute("id")[8]) + 1 +"-name"));
  makeSpan2 = setAttribute("name", "price");
  makeSpan2 = setAttribute("value", itemUnitPrice);
  makeSpan2 = setAttribute("id", "product-" + (parseInt(product1price.getAttribute("id")[8]) + 1 + "-price"));
  makeDiv./*new product element parentNode(crear esto en la function anterior?)*/.appendChild(makeDiv);
  makeDiv2./*new product element parentNode(crear esto en la function anterior?)*/.appendChild(makeDiv);
  makeDiv.appendChild(makeSpan);
  makeDiv2.appendChild(makeSpan2);
  makeSpan.appendChild(newName);
  makeSpan2.appendChild(newPrice);
}

createButton.onclick = function createNewItem(e){
  e.currentTarget(createNewItemRow(itemName, itemUnitPrice));
  createQuantityInput(e);
  createQuantityNode(e);
  createDeleteButton(e);
  e.currentTarget(createItemNode(dataType, itemData));
};

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
