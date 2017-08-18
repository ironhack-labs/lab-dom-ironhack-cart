// function deleteItem(e){
// }

// function getPriceByProduct(itemNode){
	
// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

function getPriceFromPage(item) {
	var item = document.getElementById(item);
	var price = item.querySelector(".product-cost p");
	return parseFloat(price.innerHTML.slice(1));
}

function getQuantityFromPage(item) {
	var item = document.getElementById(item);
	var quantity = item.querySelector(".units-bought input");
	return parseFloat(quantity.value) || 0;
}

function getTotalPrice(item) {
	return getPriceFromPage(item) * getQuantityFromPage(item);
}

function updatePrice(item, price) {
	var item = document.getElementById(item);
	var total = item.querySelector(".total-price p");
	total.innerHTML = "$" + price.toFixed(2);
	return price;
}
window.onload = function() {
	var priceButton = document.getElementById('price-calculator')
	var deleteButtons = document.getElementsByClassName('btn-delete')
	
	// calculate prices

	priceButton.onclick = function() {
		var shopItems = document.getElementsByClassName('product-name');
		totalPrice = 0
		for (i = 0; i < shopItems.length; i++) {
			processItem = shopItems[i].querySelector("p").innerHTML.toLowerCase()
			var newPrice = updatePrice(processItem, getTotalPrice(processItem))
			totalPrice += newPrice
		} 
		var totalText = document.querySelector("#all-totals h5")
		totalText.innerHTML = "Total Price $" + totalPrice.toFixed(2)
}
	
	for (i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].onclick = function() {
			var body = document.querySelector("body")
			body.removeChild(this.parentElement.parentElement)
		}
	}
}


