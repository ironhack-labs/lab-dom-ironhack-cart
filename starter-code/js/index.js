function deleteItem(e){

}

/*function getPriceByProduct(itemNode){
  var indivPrice = document.getElementById('initialPrice');

}*/

function getPriceByProduct(){
  var indivPrice = document.getElementById('initialPrice').innerHTML;
  var quantity = document.getElementById('quantity').value;
  return indivPrice*quantity;
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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

/*window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};*/


/*var button = document.getElementById("buttonCalculatPrice");
button.onclick = function(){
console.log(getPriceByProduct());
};*/

function totalPrice() {
  var pricePerProducts= getPriceByProduct();
  var subtotalPrice = document.getElementById('subtotalPrice');
  subtotalPrice.innerHTML=pricePerProducts;
}

function deleteQuantity(){
  var quantity = document.getElementById('quantity').value=0;
  totalPrice();
  return quantity;
}
