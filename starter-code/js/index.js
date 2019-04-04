let container = document.querySelector(".container")
let total     = 0;
//total         = Number(total.substring(1,6)); //Should return 00.00
let price     = document.querySelector("#price").innerHTML;
//price         = Number(price.substring(1,3)); //Should return 25
let quantity  = Number(document.getElementById("qty")); //0
console.log(price)
console.log(total)

//console.log(quantity)

function deleteItem(itemNode){
  this.itemNode.parentNode.removeChild(itemNode);
	  updateAllPrices();
}

function getPriceByProduct(price){
  this.price = document.getElementById('price');
  document.getElementById('price').innerHTML = this.price;
  return this.price;
}

function updatePriceByProduct(price, quantity){
  var quantity = document.getElementById('qty');
  var defaultVal = quantity.defaultValue; //0
  var currentVal = quantity.value;
  return quantity.value;
}

function getTotalPrice() {
  return price.innerHTML = getPriceByProduct() * updatePriceByProduct();
}

function createQuantityInput(){
}

function createDeleteButton(){
}

function updateAllPrices() {
	  var allItems = document.querySelectorAll('.product');
	  var totalPriceHTML = document.querySelector('totalPrice');
	  var totalPrice = 0;
}

function createQuantityNode(){
  for(var i = 0; i < allItems.length; i++ ){
    var price = getPriceByProduct(allItems[i]);
    updatePriceByProduct(allItems[i],price);
    totalPrice += price;
  }
  totalPriceHTML.innerHTML = totalPrice;
}

function createItemNode(dataType, itemData){
}

function createNewItemRow(itemName, itemUnitPrice){
}

function createNewItem(){
  let createName = document.getElementById('productName');
	let createPrice = document.getElementById('price');
	let newName = createName.value || "Item";
	let newPrice = createPrice.value || 1 ;
	createName.value="";
	createPrice.value="";
}

window.onload = function(){
  //var calculatePriceButton = document.getElementById('btn-success');
  //var createItemButton = document.getElementById('new-item-create');
  //var deleteButtons = document.getElementsByClassName('btn-delete');

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}
