function calculatePrice () {
  var price = document.getElementsByClassName('prices')
  var unit = document.getElementsByTagName('input')
  var priceTotales = document.getElementsByClassName('priceTotal')
  var sum = 0

  //console.log(price, unit, priceTotales);

  for (var i = 0; i < price.length; i++) {
     var totalPrice = price[i].innerHTML * unit[i].value
     //console.log(totalPrice);
     priceTotales[i].innerHTML = totalPrice
     console.log(sum)
     sum = sum + parseInt(priceTotales[i].innerHTML)
     console.log(sum)
   }

  document.getElementById("sumT").innerHTML = sum
}

function del(){
  var btn = document.getElementsByClassName("product");
  var div = document.getElementById("containeres");

  div.removeChild(this.btn);
}

// function create(){
//   var newN = document.getElementById("newName")
//   var newP = document.getElementById("newPrice")
//
//
// }
//
// function createD(){
//   document.createElement("div")
// }





// function deleteItem(){
// }
//
// function getPriceByProduct(itemNode){
//     var price = document.getElementsById("itemNode");
//     return price;
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
//
// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');
//
//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;
//
//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
