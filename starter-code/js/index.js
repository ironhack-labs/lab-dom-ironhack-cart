function deleteItem(e){
// var item = document.getElementByClass('wrapper');
e.target.parentElement.parentElement.remove();
}

// var input = document.querySelectorAll[i]('input');
// input.addEventListener("keyup",)

// function getPriceByProduct(itemNode){
//   var productCost = document.querySelectorAll('.cost');
//   var productCount = document.querySelectorAll('.quantity');
//   var grandTotal = parseInt(productCost[0].innerText) * parseInt(productCount[0].value);
//   var total = document.querySelectorAll('.total');
//   total[0].innerText = grandTotal.toFixed(2);
// }

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  // var start = 0;
  // var productIndex = productCost.indexOf
  var sumPrice = 0;

for (var i=0; i < document.querySelectorAll('.product-name').length; i++) {



  var productCost = document.querySelectorAll('.cost')[i];
  var productCount = document.querySelectorAll('.quantity')[i];
  var grandTotal = parseInt(productCost.innerText) * parseInt(productCount.value);
  var total = document.querySelectorAll('.total')[i];
  total.innerText = grandTotal.toFixed(2);
  sumPrice += grandTotal;


}
document.querySelector(".total-price").innerHTML = "Total Price: $" + sumPrice;
  // return grandTotal;
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
//   var original = document.getElementById('repeat-this');
//   var newItem = document.createElement(item);
var i = 0;
//   var clone = original.cloneNode(true);
//   clone.id = "repeat-this" + ++i; 

  // original.parentNode.appendChild(clone);
var original = document.getElementById('repeat-this');
var clone = original.cloneNode(true); // "deep" clone
// clone.id = "repeat-this" + ++i; // there can only be one element with an ID
original.parentNode.appendChild(clone);

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
