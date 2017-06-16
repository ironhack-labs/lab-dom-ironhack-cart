function deleteItem(e){
var deleteDiv = document.getElementById(e);
deleteDiv.innerHTML = "";
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  //obtengo los valores necesarios
  var unitPrices = document.getElementsByClassName('uPrice');
  var units = document.getElementsByClassName('units');
  var finalPrice = document.getElementsByClassName('total-price');
  var total;
  var totalCarrito=0;
  for (var i = 0; i < unitPrices.length; i++) {
    var unitPrice = parseInt(unitPrices[i].innerHTML);
    var unit = units[i].value;

    if (unit.length == 0){
      finalPrice[i].innerHTML = "0 $";
      totalCarrito += 0;
    }else {
      total = unitPrice * parseInt(unit);
      finalPrice[i].innerHTML= total+ " $";
      totalCarrito += total;
    }

    }
    var totalPrice = document.getElementById("totalCarrito");
    totalPrice.innerHTML = "Total Price: " + totalCarrito;
    console.log(totalCarrito);
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
