
function deleteItem(e){

}

function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  var price = $(".price1 span" ).text();
  priceOne = parseInt(priceOne.substring(0,priceOne.indexOf("€")));

  var howManyUnits = $(".units" ).val();
  if (howManyUnits === "") {
    howManyUnits = 1;
  }
  var fact = (priceOne * howManyUnits) + "€";

  $(".total-item1").text(fact);


  //$("#totalprice").text(fact);


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
  /*
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;  */


  //}
};
