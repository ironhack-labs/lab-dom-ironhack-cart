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
	var deleteButtons = document.getElementsByClassName('btn-delete');
	var createButton = document.getElementById('create-button');
	
	// calculate prices

	priceButton.onclick = function() {
		var shopItems = document.getElementsByClassName('product-name');
		totalPrice = 0
		for (i = 0; i < shopItems.length; i++) {
			processItem = shopItems[i].querySelector("p").innerHTML.toLowerCase()
			console.log(processItem)
			var newPrice = updatePrice(processItem, getTotalPrice(processItem))
			totalPrice += newPrice
		} 
		var totalText = document.querySelector("#all-totals h5")
		totalText.innerHTML = "Total Price $" + totalPrice.toFixed(2)
}
	
	for (i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].onclick = function() {
			var products = document.querySelector("#products")
			products.removeChild(this.parentElement.parentElement)
		}
	}


	createButton.onclick = function() {
		var productName = document.getElementById('create-name-text').value;
		var productPrice = document.getElementById('create-name-price').value || 0;
		var productExample = document.getElementById('ironbubble-head');
		newProduct = productExample.cloneNode(true);
		var productDiv = document.getElementById('products');
		productDiv.appendChild(newProduct)
		var shopItems = document.getElementsByClassName('product-name');
		shopItems[shopItems.length - 1].innerHTML = productName;
		var shopItemsPrices = document.getElementsByClassName('product-cost');
		shopItemsPrices[shopItemsPrices.length - 1].innerHTML = "$" + productPrice;
		var productList = document.getElementsByClassName('wrapper');
		(productList[productList.length - 1].removeAttribute('id'));
		(productList[productList.length - 1].setAttribute('id', productName.toLowerCase()));
		console.log(productList[productList.length - 1]);
		dispatchEvent(new Event('load'));

	}
}
