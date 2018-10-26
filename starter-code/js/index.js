function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

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

function calculatePrices() {
  var products = document.querySelectorAll('.product');

  products.forEach(function(product) {
    var cantidad = Number(product.querySelectorAll("input")[0].value);
    var precio = parseFloat(product.querySelectorAll(".price span")[0].innerHTML);

    product.querySelectorAll(".total span")[0].innerHTML = cantidad * precio;

    console.log(`Total: ${cantidad * precio}`)
  });
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  calculatePriceButton.onclick = calculatePrices;
};
