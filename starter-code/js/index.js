window.onload = function(){
//////IronBubbleProduct

var price = document.getElementById("price").innerHTML;
var totalPriceButton = document.getElementsByClassName("total")[0].innerHTML;

totalPriceButton.addEventListener("click", function(){
  var quantity = document.getElementsByTagName("input")[0].value;    
  
  var total = parseInt(price)* quantity;
 total= document.getElementsByClassName("total")[0].innerHTML;  
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
