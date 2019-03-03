
function getTotalPrice(){
	var priceArr = [];
	var numbProducts = document.getElementsByClassName('productName')
	for (var i = 0; i < numbProducts.length; i++) {
		var productPrice = document.getElementsByClassName('productPrice')[i].textContent;
		var productQuantity = document.getElementsByClassName("quantity")[i].value
		var calculatedPrice = Math.ceil(productPrice*productQuantity *100)/100;
		document.getElementsByClassName('priceByProduct')[i].innerHTML = Number(calculatedPrice) + "€"
		console.log(priceArr)
		priceArr.push(calculatedPrice)
	}
	const totalPrice = priceArr.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);
	console.log(totalPrice)
	document.getElementById("totalPrice").innerHTML = totalPrice + "€"

}

function createNewItem() {

	var productName = document.getElementById('productNameInput').value;
	var productPrice = document.getElementById('productPriceInput').value;

	var createElement = document.getElementById('createElement');

	createElement.insertAdjacentHTML('beforebegin',
																	 '<div class="productName">'+ productName + '</div><div class="productPrice">' + productPrice + '</div><div ><input class="quantity" type=text name="QTY" placeholder = "Type in Quantity"></div><div class="priceByProduct">00,00</div><div><button class="btn btn-delete" type="button">Delete</button></div>')
}

window.onload = function () {
	//everything should be written here, function declaration above
	var calculatePriceButton = document.getElementById('calc-prices-button');
	var createItemButton = document.getElementById('new-item-create');
	var deleteButtons = document.getElementsByClassName('btn-delete');



	calculatePriceButton.onclick = getTotalPrice;
	createItemButton.onclick = createNewItem;

	for (var i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].onclick = function deleteItem(e) {
			e.currentTarget.parentElement.parentElement.remove();
			console.log(e.currentTarget.parentNode.nodeName)
		}
	}

};