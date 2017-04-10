function deleteItem(e){

}

function getPriceByProduct(itemNode){

  var input = itemNode.getElementsByTagName('input')[0];
  var price = itemNode.getElementsByClassName("price")[0];

  return parseInt(input.value) * parseInt(price.innerHTML);
}

function updatePriceByProduct(productPrice, index){

  var itemNodes = document.getElementsByClassName("item");
  var price = itemNodes[index].getElementsByClassName('final-product-price')[0];
  price.innerHTML = productPrice.toString();
}

function getTotalPrice() {

  var itemNodes = document.getElementsByClassName("item");
  var totalPrice = 0;

  for(var i=0; i < itemNodes.length; i++){

      var price = getPriceByProduct(itemNodes[i]);
      console.log(price);
      updatePriceByProduct(price, i);

      totalPrice += price;

    }

  var displayTotalPrice = document.getElementById('display-total-price');
  displayTotalPrice.innerHTML = totalPrice.toString();
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
  //console.log(calculatePriceButton);
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;
  //
  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
