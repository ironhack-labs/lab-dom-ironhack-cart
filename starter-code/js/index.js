function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}
 
function getTotalPrice() {
  var arrayPrices = document.getElementsByClassName('un-price'); //array HTMLelement un-price
  var arrayQuantity = document.getElementsByTagName('input'); //array de HTMLelements
  var unitaryPrice;
  var quantity;
 console.log(arrayQuantity);
  for (i = 0; i < arrayPrices.length; i++) {
      unitaryPrice = arrayPrices[i].innerHTML.slice(1);
      unitaryPrice = Number(unitaryPrice);
      
      quantity = arrayQuantity[i].value; //string --.--
      quantity = Number(quantity);
        
      var total = unitaryPrice*quantity;
      document.getElementsByClassName('total-price-number')[i].innerHTML = '$' + total;
  
  }
    
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
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
