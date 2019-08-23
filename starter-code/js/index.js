/* function deleteItem(e){

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
}; */

let price1 = document.getElementById("price1").innerHTML.slice(2);



var calculatePrice = document.getElementById("calculate");
calculatePrice.onclick= function(){
  let quantity = document.querySelector("#qty1").value;
  //let totprice1 = = totprice ;
   let totprice=price1 * quantity;
document.getElementById("totPrice1").innerHTML = "$" + totprice
}
