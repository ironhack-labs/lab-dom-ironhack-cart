//   //retrieve de unit price of the product -> OK
//   //Retrieves the quantity of items desired -> OK
//   //Calculates the total price based on this data -> OK
//   //Updates the total price in the DOM -> Ok
function calculatePrice(){
var unitPrice = parseInt(document.getElementsByClassName("cost-unit")[0].innerHTML);
var quantityItems = parseInt(document.getElementsByClassName("input")[0].value);
var priceForThisProducts = unitPrice * quantityItems;
document.getElementsByClassName("total-price")[0].innerHTML = priceForThisProducts;
}
calculatePrice();
console.log(calculatePrice());

//this deletes the item from the chart list
function deleteItem(){
  var deleteItem1Div = document.getElementById("item1");
  deleteItem1Div.innerHTML = "";
}
deleteItem();

//
//
// function getPriceByProduct(itemNode){
//   return
// }
//
// function updatePriceByProduct(productPrice, index){
//
// }
//
// function getTotalPrice() {
//
// }
//
// function createQuantityInput(){
//
// }
//
// function createDeleteButton(){
//
// }
//
// function createQuantityNode(){
//
// }
//
// function createItemNode(dataType, itemData){
//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
// }
//
// function createNewItem(){
//
// }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice();
//   // createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
