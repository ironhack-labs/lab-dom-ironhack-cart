

function deleteItem(){
	var product = document.getElementById("product");
	product.innerHTML="";
}

function getPriceByProduct(){
	var precio = document.getElementsByClassName("price");
	var precioNum = parseFloat(precio,0);
	return precioNum;
}

function updatePriceByProduct(price, value){
	var precio = getPriceByProduct();
	price.setAttribute(price,precio)
}

function getTotalPrice() {
	var precio = getPriceByProduct();
	var cantidad = document.getElementById("unit");
	var multiplicación = precio*cantidad;
	var costo = document.getElementById("cost")
	costo.innerHTML = multiplicación;
}

function createQuantityInput(){
	var cantidad = document.getElementById("unit");
	return cantidad;
}

function createDeleteButton(){
	var button = document.getElementById("delete");
	button.onclick = deleteItem();
}

function createQuantityNode(){
	var cantidad = document.createElement ("div");
	div.innerHTML = createQuantityInput();

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
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
