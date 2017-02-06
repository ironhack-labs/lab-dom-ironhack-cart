var cart = [];

var Item = [
  {itemName: "", itemUnitPrice: "", qty: ""}
];

function createNewItem(itemName, itemUnitPrice, qty){
  this.itemName = itemName;
  this.itemUnitPrice = itemUnitPrice;
  this.qty = qty;
}

function addItemToCart(itemName, itemUnitPrice, qty){
  for (var i in cart) {
    if (cart[i].name === name) {
      cart[i].qty ++;
      return;
    }
  }
var item = new Item(itemName, itemUnitPrice, qty);
cart.push(item);
}

function deleteItem(itemName) {
  for (var i in cart) {
    if (cart[i].name === itemName) {
      cart[i].qty -- 1;
      break;

    }
  }

}

function getPriceByProduct(itemNode){
  document.log(item.itemUnitPrice);
}

// function updatePriceByProduct(productPrice, index){
// item.itemUnitPrice *
// }

function getTotalPrice() {

}

function createQuantityInput(){

}

function createQuantityNode(){

}


//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
// }



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
