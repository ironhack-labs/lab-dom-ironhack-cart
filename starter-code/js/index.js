/*function deleteItem(e){

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

}*/



/*function deleteItem(e)*/
function deleteItem(e) {
  parent = findParentWithClass(this, 'product');
  if (parent) {
    document.getElementById("product-list").removeChild(parent);
  }
}

/*function getPriceByProduct(itemNode)*/
function getPriceByProduct(product) {
  price = product.getElementsByClassName('price')[0];
  return /* no se como devolverlo buscar*/

/*function getTotalPrice()*/
function getTotalPrice() {
  total = 0.00;
  products = document.getElementsByClassName('product');
  for (i = 0; i < products.length; i++) {
    product = products[i];
    price = getPriceByProduct(product);
      quantity = (product);
      totalProductPrice = price * quantity;
  }
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
