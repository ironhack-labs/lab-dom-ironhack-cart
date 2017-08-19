
function deleteItem(e){
}

function getPriceByProduct(itemNode){
//  var button = document.getElementById("calculate");
  var prices = document.getElementsByClassName("item-price");
  var total = document.getElementsByClassName("total-price");
  var items = document.getElementsByClassName("quantity");

  var a = Number(prices[itemNode].textContent.slice(1,prices[itemNode].textContent.length));
  var b = items[itemNode].value;

  total[itemNode].textContent = "$" + (a*b).toFixed(2);
  }

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var a = document.getElementsByClassName("total-price");
  var final = document.getElementsByClassName("final-price");
  var valora = Number(a[0].textContent.slice(1,a[0].length));
  var valorb = Number(a[1].textContent.slice(1,a[1].length));
  var total = valora + valorb;
  final[0].textContent = "Total Price: $" + total.toFixed(2);
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

}

document.getElementById("calculate").onclick = function(){
  getPriceByProduct(0);
  getPriceByProduct(1);
  getTotalPrice();
};

/*
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
*/
