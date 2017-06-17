function deleteItem(e){
  var parent= document.getElementById("carro");
  var child= document.getElementsByClassName("product");
  parent.removeChild(child[e]);

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function calculatePrice() {
var costUnit = document.getElementsByClassName("cost-unit");
var quantity = document.getElementsByClassName("qt");
var totalPrice = 0;
for (var i = 0; i < quantity.length; i++){
  console.log(i);
  var eachItem = costUnit[i].innerHTML * quantity[i].value;
  totalPrice += eachItem;
  var valorProductoIndividual = document.getElementsByClassName("total-price");
  valorProductoIndividual[i].innerHTML= eachItem;
}
document.getElementById("totalPriceGlobal").innerHTML= totalPrice;
}

//function createQuantityInput(){

//}

//function createDeleteButton(){

//}

//function createQuantityNode(){

//}

//function createItemNode(dataType, itemData){

//}

//function createNewItemRow(itemName, itemUnitPrice){

//}

//function createNewItem(){

//}

//window.onload = function(){
  //var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

//  calculatePriceButton.onclick = calculatePrice;
  // createItemButton.onclick = createNewItem;

//  for(var i = 0; i<deleteButtons.length ; i++){
  //  deleteButtons[i].onclick = deleteItem;
//  }
//};
