function deleteItem(e){
  console.log(e);
  console.log(this.parent);
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
  var totalProducts = 0;

  products.forEach(function(product) {
    var cantidad = Number(product.querySelectorAll("input")[0].value);
    var precio = parseFloat(product.querySelectorAll(".price span")[0].innerHTML);
    var total = cantidad * precio;

    product.querySelectorAll(".total span")[0].innerHTML = total;

    totalProducts += total;
  });

  document.querySelectorAll("h2 span")[0].innerHTML = totalProducts;
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
