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
var numItems = 0;

window.onload = function() {
  // var itemName = document.getElementById("itemName").value;
  // var price = document.getElementById("price").value;
  // var quantity = document.getElementById("qty").value;
  // var total = document.getElementById("total").value;
  var textCreateItem = document.getElementById("textCreateItem").value;
  var textCreatePrice = document.getElementById("textCreatePrice").value;
  var createQty = document.getElementById("createQty").value;
  var buttonCalculate = document.getElementById("buttonCalculate");
  var buttonDelete = document.getElementById("buttonDelete");

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
  tprice = tprice + (textCreatePrice * createQty);
  a = parseInt(numItems);
  b = parseInt(createQty);

  numItems = (a + b);
  document.getElementById("tprice").innerHTML = "Total Price is $" + tprice + ".00";
  document.getElementById("numItems").innerHTML = "Items in cart: " + numItems;
  document.getElementById("buttonDelete").innerHTML += "<br>Delete";
}

function buttonDelete() {
  console.log("Delete Function");
  tableItems.removeChild(tableItems.childNodes[0]);
  //list.removeChild(list.childNodes[0]);
}
