function deleteItem(e){
  // var deleteProduct = e.currentTarget.parentElement.parentElement;
  // deleteProduct.remove();
  e.currentTarget.parentElement.parentElement.remove();

};

function getPriceByProduct(itemNode){
  var itemText = itemNode.innerText;
  return Number(itemText.substr(1));
}

function updatePriceByProduct(productPrice, index){
  var finalPrice = "$" + productPrice;
  index.innerText = finalPrice;
}

function getTotalPrice() {
  var products = document.getElementsByClassName("product");
  for (var i = 0; i < products.length; i++) {
    var unitPrice = getPriceByProduct(products[i].children[1].childNodes[0]);

    var productQuantity = products[i].children[2].childNodes[1].value;

    var productPrice = unitPrice * productQuantity;

    updatePriceByProduct(productPrice, products[i].children[3]);
  }


};

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
