console.log('Hola');

document.addEventListener('DOMContentLoaded', deleteItem );

document.getElementsByClassName("btn btn-success")[0].addEventListener("click", calculatePriceItem);


var itemsList = document.getElementsByClassName("item");
	console	.log(itemsList);

	var productPrice = document.getElementsByClassName("price");
	console.log(productPrice);

	var itemUnits = document.getElementsByClassName("units");
	console.log(itemUnits);

	var priceItems = document.getElementsByClassName("priceItem");
	console.log(priceItems);

	var deleteButton = document.getElementsByClassName("btn btn-delete");
	console.log(deleteButton);

function calculatePriceItem() {

	for( i = 0; i < itemsList.length ; i++){

  		priceItems[i].innerHTML = productPrice[i].innerHTML * itemUnits[i].value; 	 	
  	 }
	getTotalPrice();
  	 

	return priceItems;

	
}

function getTotalPrice() {

	var totalPrice = 0;
	for( i = 0; i < priceItems.length ; i++){
		totalPrice += priceItems[i];
		return totalPrice;
	};
	console.log(totalPrice);
	document.getElemensByTagName("h2 span").innerText = '$' + totalPrice;
}

document.addEventListener('#btn btn-create',function(){
	var newItem = builNewItem (nameProduct, priceProduct);
	addNewItem(newItem);
});



function addNewItem(newItem) {
	var cart = document.querySelector('#cart');
	cart.appendChild(newItem);
}
  
function builNewItem(nameProduct, priceProduct) {
	var newItem = document.querySelector('#new-item-template').cloneNode(true);
	var nameProduct = document.querySelector('.new-name').value;
	var priceProduct = document.querySelector('.new-price').value;
	
	newItem.querySelector('#new-item-template > .name').innerText = nameProduct;
	newItem.querySelector('#new-item-template > .price').innerText = priceProduct;
	
	
	newItem.querySelector('#new-item-template > .btn').addEventListener('click', onClickDeleteItem);
  
	return newItem;
}

function onClickDeleteItem(event) {
	var deleteButton = event.target;
	var item = deleteButton.parentNode.parentNode;

	var cart = document.querySelector('#cart');
	cart.removeChild(item);
}


/*function deleteItem() {

	for( i = 0; i < itemsList.length ; i++){

		deleteButton[i].addEventListener("click", function() {

			itemsList[i].innerHTML = "";
			deleteButton[i].innerHTML = "";

		});

	}
}

function createDiv(cls) {
	var div = document.createElement("div").classList.add(cls);
	return div;
}

function createSpan(cls) {
	var span = document.createElement("span").classList.add(cls);
	var input = document.createElement("input");
	span.appendChild(input);
	return span;
}

function createItem() {
	


	
}*/
