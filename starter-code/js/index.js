function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(){
/*var unit = document.getElementById("unit").innerHTML;
unit = unit.slice(1,unit.length);
var total = document.getElementById("total");
var qty = parseInt(document.getElementById("qty").value);
var totalPrice = "$" + (unit*qty) + ".00";
total.innerHTML = totalPrice;*/
var units = document.getElementsByClassName("unit");
var total = document.getElementsByClassName("total");
var qty = document.getElementsByClassName("qty");
var tato = units.length;
for (var i = 0; i < tato; i++){
  unit = parseInt(units[i].innerHTML);
  qt = parseInt(qty[i].value);
  if (qt>0){
  var totalPrice = "$" + (unit*qt) + ".00";
  total[i].innerHTML = totalPrice;
  }else{
    total[i].innerHTML="$" + 0 + ".00";
  }
}


}

function getTotalPrice() {

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
