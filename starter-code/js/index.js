window.onload = function(){
//////IronBubbleProduct

var price = document.getElementById("price").innerHTML;
var calcPriceButton = document.getElementById("calculate-price-btn");

calcPriceButton.addEventListener("click", function(){
  var quantity = document.getElementsByTagName("input")[0].value;    
  
  total = parseInt(price)* quantity;
  document.getElementsByClassName("total")[0].innerHTML = total;      //setting a new value
});
}

// console.log(totalPrice)





// function deleteItem(e){

// }

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

// window.onload = function(){







// // var calculatePriceButton = document.getElementById('calc-prices-button');
// //   var createItemButton = document.getElementById('new-item-create');
// //   var deleteButtons = document.getElementsByClassName('btn-delete');

// //   calculatePriceButton.onclick = getTotalPrice;
// //   createItemButton.onclick = createNewItem;

// //   for(var i = 0; i<deleteButtons.length ; i++){
// //     deleteButtons[i].onclick = deleteItem;
// //   }
// };
