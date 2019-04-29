function deleteItem(e){

}
//
//function getPriceByProduct(itemNode){
//
//}
//
//function updatePriceByProduct(productPrice, index){
//
//}
//
function getTotalPrice() {
  let prices = document.getElementById(`prices`).innerHTML
  let quantity = document.getElementById(`quantity`).value
  let totalPrice = prices*quantity
  console.log(totalPrice)



} 
//getTotalPrice()

//
//function createQuantityInput(){
//
//}
//
//function createDeleteButton(){
//
//}
//
//function createQuantityNode(){
//
//}
//
//function createItemNode(dataType, itemData){
//
//}
//
//function createNewItemRow(itemName, itemUnitPrice){
//
//}
//
//function createNewItem(){
//
//}
//
window.onload = function(){
 var calculatePriceButton = document.getElementById('calc-prices-button');
//  var createItemButton = document.getElementById('new-item-create');
 var deleteButtons = document.getElementsByClassName('btn-delete');

 calculatePriceButton.onclick = getTotalPrice;
//  createItemButton.onclick = createNewItem;

 for(var i = 0; i<deleteButtons.length ; i++){
   deleteButtons[i].onclick = deleteItem;
 }
};
