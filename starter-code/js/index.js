function deleteItem(e){

}

function getPriceByProduct(itemNode){


}

function updatePriceByProduct(productPrice, index){





}

function getTotalPrice() {

  var price = parseFloat(document.querySelector(".price").innerHTML);
  var quantity = document.querySelector(".quantity").value;

  var total = price * quantity;

  document.querySelector(".total").innerHTML = total;

  console.log(quantity)
  console.log(price)

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
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;



  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


