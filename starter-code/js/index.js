function deleteItem(e){

}

function getPriceByProduct(itemNode){
  this.itemNode = document.getElementById('price').textContent;
  document.getElementById('price').innerHTML = this.itemNode;
  return this.itemNode;
}

function updatePriceByProduct(productPrice, index){

var quantity = document.getElementById('qty');
var defaultVal = quantity.defaultValue;
var currentVal = quantity.value;
return quantity.value;
}


function getTotalPrice() {
  var totalPrice = document.getElementById('priceQty');
  return totalPrice.innerHTML = getPriceByProduct() * updatePriceByProduct();
}

function createQuantityInput(){
newQty = document.getElementById('qty');
var clnQty = newQty.cloneNode(true);
}
//
// function createDeleteButton(){
// newDelete = document.getElementsByClassName('btn-delete');
// var clnDelete = newDelete.clone(true);
//
// }

// createDeleteButton();

function createQuantityNode(){

}
//
// function createItemNode(dataType, itemData){
//
// }
//
function createNewItemRow(itemName, itemUnitPrice){
this.itemName = itemName;
this.itemUnitPrice = itemUnitPrice;
var newRow = document.getElementsByTagName('DIV')[0];
var cln = newRow.cloneNode(true);
newRow.appendChild(cln, createQuantityInput);


}
//  var item2 = new createNewItemRow ("Spider rolls", 17.25);
// createNewItemRow(item);


function createNewItem(){
 var itemNew = document;
}
//
// var item1 = new updatePriceByProduct (10.00);
// item1.showPrice();


// window is the whole main object of JS. this function means that when everything
// is loaded on the window to run the function below//
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');
//
  calculatePriceButton.onclick = getTotalPrice;
  //onclick is an EVENT// We are not "calling" the function getTotalPrice because we are saying
  // to call the function only when the onclick is clicked//
  // createItemButton.onclick = createNewItem();

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};

window.onload();
