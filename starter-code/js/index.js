function deleteItem(event){
	let productLine = event.target.parentElement.parentElement
	document.body.removeChild(productLine)
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
	let cnt = 0
	let totalPrice = 0
	let productPrices = document.querySelectorAll(".product-price")
	for (product of productPrices){
		let result = parseFloat(product.innerHTML) * parseFloat(document.querySelectorAll(".product-qty")[cnt].value)
		document.querySelectorAll(".product-total-price")[cnt].innerHTML = result
		totalPrice = totalPrice + result
		cnt = cnt + 1
	}
	document.getElementById("total-price").innerHTML = totalPrice
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
	produto = document.querySelectorAll(".product-line")[0];
	clone = produto.cloneNode(produto);
	clone.children[0].children[0].children[0].innerHTML = document.getElementById('product-name-input').value;
	clone.children[1].children[0].innerHTML = document.getElementById('product-name-input').value
	document.body.appendChild(clone)
}	

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};








