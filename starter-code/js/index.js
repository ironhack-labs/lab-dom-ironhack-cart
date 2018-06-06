console.log('hello');

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(costOfOneUnit, quantity) {
  return (costOfOneUnit * quantity)
}

function createQuantityInput(){
  document.querySelector("costOfOneUnit")*document.querySelector("quantity");
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

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var ironStickerInput = document.getElementById('ironSticker');
  var ironStickerTotal = document.getElementById('ironStickerTotal');


  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
  ironStickerInput.onchange = function (e) {
    console.log(ironStickerTotal);
    var unitPrice = parseFloat(ironStickerUnitPrice.innerText.substr(1));
    ironStickerTotal.innerHTML = "$" + (ironStickerInput*ironStickerUnitPrice);
    console.log(e.target.value);
    console.log(unitPrice);
  }
};

var btnsuccess = document.querySelector(".btn-success");

var numBox = document.querySelector("input");

var totalPrice = document.querySelector("total");

// btnsuccess.onclick = function (){
//   if (quantity.value === 0){
//     return getTotalPrice
//   }
//   var result = document.createElement("numBox")
// };

