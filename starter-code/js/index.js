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

	// buttons
	var priceButton = document.getElementById('price-calculator')
	var deleteButtons = document.getElementsByClassName('btn-delete');
	var createButton = document.getElementById('create-button');

	// cloned division so we can recreate even if everything is deleted
	var productExample = document.getElementById('ironbubble-head');
	newProduct = productExample.cloneNode(true);
	
	// calculate prices

	priceButton.onclick = function() {
		var shopItems = document.getElementsByClassName('product-name');
		totalPrice = 0
		for (i = 0; i < shopItems.length; i++) {
			console.log(shopItems[i])
			processItem = shopItems[i].querySelector("p").innerHTML.toLowerCase()
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

		// extract info necessary to build new item 
		var productName = document.getElementById('create-name-text').value;
		var productPrice = parseFloat(document.getElementById('create-name-price').value) || 0;
		

		// clone division and insert it 
		
		var productDiv = document.getElementById('products');
		productDiv.appendChild(newProduct);

		// insert new product name 
		var shopItems = document.getElementsByClassName('product-name');
		var newItem = shopItems[shopItems.length - 1];
		var pText = document.createElement('p');
		pText.innerHTML = productName; 
		newItem.removeChild(newItem.querySelector('p'))
		newItem.appendChild(pText);

		// insert product price 
		var shopItemsPrices = document.getElementsByClassName('product-cost');
		var newPrice = shopItemsPrices[shopItemsPrices.length - 1];
		var pText2 = document.createElement('p')
		pText2.innerHTML = "$" + productPrice.toFixed(2);
		newPrice.removeChild(newPrice.querySelector('p'))
		newPrice.appendChild(pText2)
		var productList = document.getElementsByClassName('wrapper');
		(productList[productList.length - 1].removeAttribute('id'));
		(productList[productList.length - 1].setAttribute('id', productName.toLowerCase()));

		for (i = 0; i < deleteButtons.length; i++) {
			deleteButtons[i].onclick = function() {
				var products = document.querySelector("#products")
				products.removeChild(this.parentElement.parentElement)
		}
	}
	}
}
