function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  // var unitPrice = Number(document.getElementById("unit-price").textContent.slice(1));
  // var quantity = document.getElementById("qty").value;
  // document.getElementById("item-total").innerHTML = "$" + (unitPrice * quantity).toString();

  // console.log(document.getElementsByClassName("item-totals"));

  var items = document.getElementsByClassName("item-totals");
  var numberOfItems = items.length;
  for (var i=0; i < numberOfItems; i++) {
    console.log("unit-price" + i);
    var unitPrice = Number(document.getElementById("unit-price" + i).textContent.slice(1));
    var quantity = document.getElementById("qty" + i).value;
    document.getElementById(items[i]["id"]).innerHTML = "$" + (unitPrice * quantity).toFixed(2).toString();
  }

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
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;
  //
  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
