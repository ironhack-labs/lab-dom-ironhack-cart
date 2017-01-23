function deleteItem(e){

}

function getPriceByProduct(){
//  var totalPrice = 0;
//  var itemUnitPrice = document.getElementsByClassName("item-unit-price");
//  for (var i = 0; i<= itemUnitPrice.length; i++) {
//    var UnitPrice = itemUnitPrice[i].innerHTML;
//    var UnitPriceInt = Number(UnitPrice.substr(1));
//    var input = Number(document.getElementsByClassName("input")[i].value);
//    document.getElementsByClassName("item-price")[i].innerHTML = '$'+UnitPriceInt * input;
//  }
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
var itemUnitPrice = document.getElementsByClassName("item-unit-price");
var N = Number(itemUnitPrice.substr(1));
console.log(N);
//  getPriceByProduct();
//  document.getElementsByTagName("h2").innerText =
//  var UnitPrice = document.getElementsByClassName("item-unit-price")[0].innerText;
//  var UnitPriceInt = Number(UnitPrice.substr(1));
//  var input = Number(document.getElementsByClassName("input")[0].value);
//  document.getElementsByClassName("item-price")[0].innerHTML = '$'+UnitPriceInt * input;

}

function createQuantityInput(){
//   var getQuant = getElementsByClassName('quantity');
//   var createQuant1 = document.createElement('input');
//   var createLab = document.createElement('label');
//   var createLabT = document.createTextNode('QTY');
//   getQuant.appendChild(createQuant1);
//   createLab.appendChild(createLabT);
//   document.getElementById
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
