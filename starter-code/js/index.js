function deleteItem(e){

}

function getPriceByProduct(){
var precio = Number(document.getElementById("price1").innerHTML);
var cantidad = Number(document.getElementById("QTY").value);

var total = document.getElementById("firstTotal");

var multi= precio * cantidad;
total.innerHTML = multi;

}






/*

function updatePriceByProduct(productPrice, index){



}

function getTotalPrice() {

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

}*/

window.onload = function(){
var calculatePriceButton = document.getElementById('calc-prices-button');
var createItemButton = document.getElementById('new-item-create');
var deleteButtons = document.getElementsByClassName('btn-delete');

/*calculatePriceButton.onclick = getTotalPrice;
createItemButton.onclick = createNewItem;*/
calculatePriceButton.onclick = function() {
  getPriceByProduct();
}


/*
for(var i = 0; i<deleteButtons.length ; i++){
  deleteButtons[i].onclick = deleteItem;
}*/
};
