var pressCalculate = document.getElementById('calc-prices-button');
pressCalculate.onclick = getTotalPrice;

var deleteButtons = document.getElementsByClassName('btn btn-delete');
console.log(deleteButtons);
for (var i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener(
		'click',
		function(e) {
			e.currentTarget.parentNode.parentNode.remove();
		},
		false
	);
}

function getTotalPrice() {
	console.log('clickeddddddd calculate total price');
	var prices = document.querySelectorAll('.total-price');
	var lengthPrices = prices.length;
	var totalPrice = 0;
	for (let i = 0; i < lengthPrices; i++) {
		totalPrice = (createQuantityInput(i) * getPriceByProduct(i)).toFixed(2);
		console.log('precio ' + prices[i].innerHTML);
		prices[i].innerHTML = totalPrice;
	}
}

function getPriceByProduct(index) {
	//itemNode as argumen???
	var productPrices = document.querySelectorAll('.product-price');
	var singleProductPrice = Number(productPrices[index].innerHTML);
	console.log(singleProductPrice, 'single price');
	return Number(singleProductPrice);
}

function createQuantityInput(index) {
	var qantityInputs = document.querySelectorAll('.input');
	var quantity = Number(qantityInputs[index].value);
	console.log(quantity, 'number of items');
	return Number(quantity);
}
//window.onload = function () {
//  var calculatePriceButton = document.getElementById('calc-prices-button');
// var createItemButton = document.getElementById('new-item-create');
// var deleteButtons = document.getElementsByClassName('btn-delete');
// var pressCalculate = document.getElementsByClassName('calc-prices-button');
// pressCalculate.onclick = getTotalPrice;  // createItemButton.onclick = createNewItem;
// for (var i = 0; i < deleteButtons.length; i++) {
//   deleteButtons[i].onclick = deleteItem;
// }
//};
