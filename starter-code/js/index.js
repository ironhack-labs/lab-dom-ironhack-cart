function deleteItem(e){

}

function getPriceByProduct(itemNode){
	var price = document.getElementById('product1').innerHTML;
	price = price.slice(1);
	return price;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
	console.log( getPriceByProduct() * createQuantityInput());
	
}

function createQuantityInput(){
	var quantity = document.getElementById('quant1').value;
	if (quantity === ''){
		alert('Debes introducir un número');
		return;
	}
	return parseInt(quantity);
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

  calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
