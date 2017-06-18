function deleteItem(){
//necesito saber el node del padre de la row que quiero borrar,
// para ello primero tengo que saber el nodo del padre del evento que se crea al pulsar el boton,
//  y a su vez el padre de éste
var parentRow = event.currentTarget.parentNode.parentNode;
//a continuación indico que se borre todos los elementos que están dentro de este padre
 parentRow.parentNode.removeChild(parentRow);


}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var unitPrices = document.getElementsByClassName("unit-price");
  var quantities = document.getElementsByClassName("QTY");
  var productTotalPrices = document.getElementsByClassName("product-total-price");
  var totalCart = 0
  for(i=0;i<unitPrices.length;i++){
    var totalPrice = 0;
    unitPrice = unitPrices[i].innerHTML;
    quantity= parseInt(quantities[i].value);
    finalPrice = parseInt(unitPrice.substring(1,unitPrice.length))
    totalPrice += quantity*finalPrice;
    totalCart += totalPrice;
    productTotalPrices[i].innerHTML = "$"+totalPrice;
  }
var h2 = document.createElement("h2");
h2.innerHTML = "Total Price: $"+ totalCart;
document.getElementById("product-total-cart").appendChild(h2);
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
  // createItemButton.onclick = createNewItem;
  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
