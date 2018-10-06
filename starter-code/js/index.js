function calculateLinePrice(){
var UnitPrice = document.getElementsByClassName("productPrice");
var UnitQuantity = document.getElementsByClassName("UnitQuantity");
var totalUnitPrice = document.getElementsByClassName("totalUnitPrice");
var totalPrice = (parseInt(UnitPrice[0]))*(parseInt(UnitQuantity[0]));
console.log(totalPrice);
totalUnitPrice[0].innerHTML = totalPrice;
}



function deleteItem(e){



}

function getPriceByProduct(itemNode){
var element
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var items = document.getElementsByClassName("items");
    var itemCount = items.length;
    var total = 0;
    for(var i = 0; i < itemCount; i++)
    {
        total = total +  parseInt(items[i].value);
    }
    document.getElementById('tot').value = total;

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

  //calculatePriceButton.onclick = getTotalPrice;//
  calculatePriceButton.onclick = calculateLinePrice();
  //createItemButton.onclick = createNewItem;//

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
