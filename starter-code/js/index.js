/*
element.innerHTML = "I'm a cat";
element.style.border = "2px green solid";
otherElement.className = cName;
HTMLCollection
var mice = document.getElementsByClassName('mouse');
var divs = document.getElementsByTagName('div');
*/

window.onload = function(){
  var btnTotalPrice = document.getElementById("calculate-total-price");
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  btnTotalPrice.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


function getTotalPrice() {
  unitPrices = document.getElementsByClassName("product-cost");
  units = document.getElementsByClassName("units");
  subtotals = document.getElementsByClassName("product-total");
  console.log("total de artículos listados: " + unitPrices.length);
  total = 0;

  for (i=0; i<unitPrices.length; i++){
    console.log("precio artículo: " + parseFloat(unitPrices[i].innerHTML));
    console.log("unidades artículo: " + units[i].value);
    subtotal = parseFloat(unitPrices[i].innerHTML)*units[i].value;
    console.log("subtotal artículo: " + subtotal);
    subtotals[i].innerHTML = subtotal;
    total += subtotal;
  }

document.getElementById("total-price").innerHTML = total;

}


function deleteItem(e){

}


function updatePriceByProduct(productPrice, index){

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

function createNewItem(){

}

