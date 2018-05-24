var calculatePriceButton = document.getElementById("calculate-price");
calculatePriceButton.onclick = function() {
  var unitPrice = document.getElementById('price').innerText;
  var priceNumber = Number(unitPrice.replace("$", " "));
  var totalItems = document.getElementById('unit-input').value;
  var Price = Number((priceNumber * totalItems).toFixed(2));
  var PriceProduct1 = "$" + Price
  document.getElementById('total-price').innerText = PriceProduct1;
  var unitPrice2= document.getElementById('price2').innerText;
  var priceNumber2 = Number(unitPrice2.replace("$", " "));
  var totalItems2 = document.getElementById('unit-input2').value;
  var Price2 = Number((priceNumber2 * totalItems2).toFixed(2));
  var PriceProduct2 = "$" + Price2
  document.getElementById('total-price2').innerText = PriceProduct2;
  var totalPrice = Price + Price2;
  document.getElementById("total-price-cart").innerText = '$' + totalPrice;
}


function getTotalPrice(id, totalPrice) {
document.getElementById(id).innerText= totalPrice;
}

function deleteItem(e){

}

function getPriceByProduct(itemNode){

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
