function deleteItem(){
	//console.log( this.innerHTML )
	this.parentNode.parentNode.remove()	
}

function getPriceByProduct(itemNode){


}

function updatePriceByProduct(productPrice, index){



}

function getTotalPrice() {
	var totalPrices = [];
	var prices = [ ];
	document.querySelectorAll(".prix").forEach( el => prices.push(parseInt(el.innerHTML)) )

	var quantities = []
	document.querySelectorAll("input").forEach(function(el) {
		quantities.push(el.value) 
	})
	
	for (var i = 0; i < quantities.length; i++) {
		totalPrices.push(quantities[i] * prices[i]);
	}
	//console.log( totalPrices );
	var totals = document.querySelectorAll(".total");
	totals.forEach(function(el, idx){
		el.innerHTML = totalPrices[idx];
	})

	var finalTotal = totalPrices.reduce(function (acc, oneTotal) {
		return acc + oneTotal; 
	}, 0);
	document.querySelector("h2 span").innerHTML = finalTotal
	
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

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem
  }
}