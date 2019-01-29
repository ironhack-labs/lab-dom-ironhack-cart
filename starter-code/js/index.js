function deleteItem(e){
  e.currentTarget.parentElement.parentElement.remove()
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){


}

function getTotalPrice() {
  let productWrapper = document.getElementsByClassName('wrapper')[0];
  let items = productWrapper.getElementsByClassName('item-wrapper')[0];

  for(var i  =0; i<items.length; i++){
    let item = items[i]
    let price = items.getElementsByClassName('text-center')[1].innerHTML;
    let qnty = items.getElementsByClassName('qnty-info')[0].getElementsByClassName('qnty-input')[0].value;

    console.log(items.getElementsByClassName('text-center')[1].innerHTML)

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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
