function deleteItem(e){

}

function getPriceByProduct(product){
  var price = Number((product.children[1].children[0].innerHTML).slice(1))
  var quantity = Number(product.children[2].children[1].value)
  var totalPrice = product.children[3].children[0]
  totalPrice.innerHTML = "$" + price*quantity
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.getElementsByClassName("product")

  for(var i=0; i<products.length; i++){
    getPriceByProduct(products[i])
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

  calculatePriceButton.onclick = function(){
    getTotalPrice()
  }
  // createItemButton.onclick = createNewItem();
  //
  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
