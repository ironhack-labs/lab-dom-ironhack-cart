
var product = document.querySelectorAll(".product");
var productName = document.querySelector(".product-name").innerHTML;
var productPrice = document.querySelectorAll(".product-price")
var productQty = document.querySelectorAll(".qty");
var productTotalPrice = document.querySelectorAll(".price-qty");

var calculatePrice = document.querySelector("#calc-prices-button");



function calc () {

	var product = document.querySelectorAll(".product");
	for (var i = 0; i < product.length; i++) {

		console.log(product.length);
		console.log(Number(productQty[i].value));
		console.log(Number(productPrice[i].innerHTML));

		var totalPrice = Number(productQty[i].value) * Number(productPrice[i].innerHTML);

		console.log(totalPrice);
		productTotalPrice[i].innerHTML = totalPrice;

	};


	// var productQty = document.querySelector(".qty").value;

	// var totalPrice = Number(productQty.value) * Number(productPrice.innerHTML);
	// productTotalPrice.innerHTML = totalPrice;

};

calculatePrice.onclick = function	() {
	calc();
	};

// function () {
// 	var product = document.querySelectorAll(".product").length;
// 	for (var i = 0; i < product.length; i++) {

// 		console.log(product.length);
// 		console.log(Number(productQty[i].value));
// 		console.log(Number(productPrice[i].innerHTML));

// 		var totalPrice = Number(productQty[i].value) * Number(productPrice[i].innerHTML);
// 		productTotalPrice[i].innerHTML = totalPrice;
// 	};
// };

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
