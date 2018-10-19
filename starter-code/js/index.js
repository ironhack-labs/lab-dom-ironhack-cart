
var product = document.querySelector(".product")
var productName = document.querySelector(".product-name").innerHTML;
var productPrice = document.querySelector(".product-price").innerHTML;
var productQty = document.querySelector(".qty").value;
var productTotalPrice = document.querySelector(".price-qty");

var calculatePrice = document.querySelector("#calc-prices-button");



function calc (productPrice, productQty) {

	var productQty = document.querySelector(".qty").value;

	var totalPrice = Number(productQty) * Number(productPrice);
	productTotalPrice.innerHTML = totalPrice;

};

calculatePrice.onclick = function () {
	console.log("this should work");
	calc(productPrice, productQty);
}

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

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

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
