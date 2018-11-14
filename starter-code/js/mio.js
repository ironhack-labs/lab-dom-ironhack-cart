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
	

	return priceItems;

	getTotalPrice();
  	 
}

function getTotalPrice() {

	var totalPrice = 0;
	for( i = 0; i < priceItems.length ; i++){
		totalPrice += priceItems[i];
		return totalPrice;
	};
	console.log(totalPrice);
	document.getElemensByTagName("h2 span").innerHTML = '$' + totalPrice;
}

function deleteItem() {

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
	


	
}
