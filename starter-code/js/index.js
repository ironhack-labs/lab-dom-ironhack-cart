function deleteItem(e){

}

i=1;
function getPriceByProduct(i){
  var productPrice = parseFloat(document.getElementsByClassName('product-price')[i].innerHTML);
  var quantity = parseInt(document.getElementsByClassName('quantity')[i].value);
  var totalAmount = productPrice*quantity;
  return totalAmount;
}

function updatePriceByProduct(){
  var totalPrice = parseInt(document.getElementById('totalPrice'));
  var totalPrice = 0;
  while (i>-1) {
    var amount = parseInt(document.getElementsByClassName('amount')[i]);
    var amount = getPriceByProduct(i);
    console.log(amount);
    document.getElementsByClassName('amount')[i].innerHTML=amount;
    i--;
    var totalPrice = totalPrice + amount;
  }
  console.log(totalPrice);
  document.getElementById('totalPrice').innerText=totalPrice;
  i=1;
};


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

window.onload = function(){
// //   // var calculatePriceButton = document.getElementById('calc-prices-button');
// //   // var createItemButton = document.getElementById('new-item-create');
// //   // var deleteButtons = document.getElementsByClassName('btn-delete');
// // updatePriceByProduct();
// //   //
// //   // calculatePriceButton.onclick = getTotalPrice;
// //   // createItemButton.onclick = createNewItem;
 };
