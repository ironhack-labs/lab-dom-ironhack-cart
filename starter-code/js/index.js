

// function deleteItem(e){
// }

 function updatePriceByProduct() {
  var priceUnit = parseInt(document.querySelector("#priceValue").innerHTML);
  priceUnit = priceUnit * parseInt(document.querySelector("#quatity").innerHTML);
  document.querySelector("#totalPriceProduct").innerHTML = priceUnit;
  //console.log(document.querySelector("#totalPriceProduct").innerHTML);  
}
window.onload = function() {
  var priceUnittot = document.querySelector("#calcPrices");
  priceUnittot.onclick = updatePriceByProduct;
};

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

//  window.onload = function(){
//    var calculatePriceButton = document.getElementById('calc-prices-button');
//    var createItemButton = document.getElementById('new-item-create');
//    var deleteButtons = document.getElementsByClassName('btn-delete');

//    calculatePriceButton.onclick = getTotalPrice;
//    createItemButton.onclick = createNewItem;

//    for(var i = 0; i<deleteButtons.length ; i++){
//      deleteButtons[i].onclick = deleteItem;
//    }
//  };
