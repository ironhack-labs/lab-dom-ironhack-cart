function deleteItem(e){
  window.button = e;

  e.target.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){
  // let productPrice = document.
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let theQuantity = document.getElementsByClassName("quantity-input");
  // console.log(theQuantity);

  let productPrice = document.getElementsByClassName("price");
  // console.log(productPrice);
  let totalPrice = document.getElementsByClassName("total-price");
  // let totalPrice = theQuantity
  let totalCartPrice = 0;

  let cartPrice = document.getElementById("cart-total");

  for(let i = 0; i < theQuantity.length; i++) {
    let currentQuantity = parseInt(theQuantity[i].value);
    console.log(currentQuantity);
    let currentPrice = parseInt(productPrice[i].innerText.replace("$", ''));
    console.log(currentPrice);
    let currentTotal = currentQuantity * currentPrice
    let currentTotalForItem = totalPrice[i]
    currentTotalForItem.innerText = currentTotal;
    totalCartPrice += currentTotal;

  }
  console.log(totalCartPrice);
  cartPrice.innerText = cartPrice.innerText + " " + "$" + totalCartPrice;
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
