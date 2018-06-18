function deleteItem(e){

}

function getPriceByProduct(itemNode){
  return itemNode.getElementsByClassName("unit-cost")[0].innerHTML.substr(1);
}


function updatePriceByProduct(productPrice, index){
  var product = document.getElementById(index);
  var productsCost = product.getElementsByClassName("products-price")[0];
  var quantity = product.getElementsByClassName("qty")[0].value;
  productsCost.innerHTML = "$" + productPrice;

  return productsCost;
}
function getTotalPrice() {
  var products = document.getElementsByClassName("container");
  var totalCost = 0;
  for( var i = 0; i < products.length; i++){
    var productPrice = getPriceByProduct(products[i]);
    console.log(productPrice);
    var quantity = products[i].getElementsByClassName("qty")[0].value;

    totalCost += updatePriceByProduct(productPrice * quantity, i);
    console.log(totalCost);
    document.getElementById("total-price").innerHTML = "$"+totalCost;

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
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
