function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

//Función para calcular el precio total
function getTotalPrice() {

  debugger;
  var products = document.getElementsByClassName("product");

  for (var index = 0; index < products.length; index++) {
    
    var quantity = products[index].getElementsByTagName("input")[0].value;
    var singlePrice = 
    products[index].getElementsByClassName("product-price")[0].innerText.replace("$","");
    
    var totalPrice = Number(quantity) * Number(singlePrice);

    products[index].getElementsByClassName("totalPrice")[0].innerText =
    parseFloat(totalPrice).toFixed(2);
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


  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
