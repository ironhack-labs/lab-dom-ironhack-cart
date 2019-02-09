function deleteItem(e){

}

function getPriceByProduct(itemNode){
  var unitPrice = itemNode.getElementsByClassName('dollars').innerText.replace('$','');
  //return unitPrice;
  console.log(unitPrice);
}
getPriceByProduct();

function updatePriceByProduct(productPrice, index){
  var totalPrice = index.querySelector('.total');
  var quantity = index.getElementsByTagName('input').value;
  var productTotal = (quantity > 0 ? quantity : 0) * productPrice;
  totalPrice.innerText = "$" + productTotal.toFixed(2);
  return productoTotal;
}

function getTotalPrice() {
  var items = document.getElementsByClassName('item');
  var totalAmount = document.querySelector('.total-amount');
  var totalPrice = 0;
  items.forEach(element => {
  totalPrice += updatePriceByProduct(getPriceByProduct(element), element);
  });
  totalAmount.innerText = "$" + totalPrice.toFixed(2);
}

function createQuantityInput(){

}

function createDeleteButton(){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i=0; i<deleteButtons.length; i++){
		(function(indice){
			deleteButtons[indice].onclick = function(evento){
        evento.preventDefault();
        
			}
		})(i);
	}
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
  var calculatePriceButton = document.getElementsByClassName('btn-success')[0];
  var createItemButton = document.getElementById('new-item-create');
  
 
};
