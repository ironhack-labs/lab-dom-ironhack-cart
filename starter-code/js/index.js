// function deleteItem(e){
//
// }
//
// function getPriceByProduct(itemNode){
// }
//
// function updatePriceByProduct(productPrice, index){
//
// }

function getTotalPrice() {
  price = document.getElementById("price-product1").innerText;
  amount = document.getElementById("quantity1").value;
  total = document.getElementById("total-price1");
  totalPrice = price * amount;
  total.innerHTML = "$ " + totalPrice;
}

var button = document.getElementById("calc-prices-button");
console.log(button);
button.onclick = function(){
  getTotalPrice();
};

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
//
// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.nclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
