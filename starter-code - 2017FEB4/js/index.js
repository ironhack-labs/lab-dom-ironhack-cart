//
//
// function deleteItem(e){
//
// }
//
// function getPriceByProduct(itemNode){
//
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
var tprice = 0;

window.onload = function() {
  // var itemName = document.getElementById("itemName").value;
  // var price = document.getElementById("price").value;
  // var quantity = document.getElementById("qty").value;
  // var total = document.getElementById("total").value;
  var textCreateItem = document.getElementById("textCreateItem").value;
  var textCreatePrice = document.getElementById("textCreatePrice").value;
  var createQty = document.getElementById("createQty").value;
  // var buttonCalculate = document.getElementById("buttonCalculate");
  // var buttonCreate = document.getElementById("buttonCreate");


}

buttonCreate.onclick = function() {
  //do stuff
  textCreateItem = document.getElementById("textCreateItem").value;
  textCreatePrice = document.getElementById("textCreatePrice").value;
  createQty = document.getElementById("createQty").value;
  console.log("button clicked");
  console.log(textCreateItem + " " + textCreatePrice + " " + createQty);
  document.getElementById("itemName").innerHTML += "<br>" + textCreateItem;
  document.getElementById("price").innerHTML += "<br>" + "$" + textCreatePrice + ".00";
  document.getElementById("quantity").innerHTML += "<br>" + "QTY " + createQty;
  document.getElementById("buttonDelete").innerHTML += '<br><button class="buttonDelete" type="submit">Delete</button></li>';
  tprice = tprice + (textCreatePrice * createQty);
  console.log(tprice);
  document.getElementById("tprice").innerHTML = "Total Price is $" + tprice + ".00";
}


// var buttonCalculate = document.querySelector("#buttonCalculate");
var buttonCalculate = document.getElementById("buttonCalculate");
buttonCalculate.onclick = function() {
  var itemName = document.getElementById("itemName");
  var price = document.getElementById("price").innerHTML;
  var quantity = document.getElementById("qty");
  var total = document.getElementById("total");
  document.getElementById("total").innerHTML = (price);
  console.log(price, qty);
  console.log("Calculate Button was clicked.");
}



// function calculateButton() {
//   var itemName = document.getElementById("itemName");
//   var price = document.getElementById("price").innerHTML;
//   var quantity = document.getElementById("qty");
//   var total = document.getElementById("total");
//   document.getElementById("total").innerHTML = price;
//   console.log(price);
//   console.log("Calculate Button was clicked.");
//
// }

function calculatePrice() {
  console.log("Calculate Button was Clicked");
}

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
