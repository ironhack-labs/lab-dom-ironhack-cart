function deleteItem(e){
  e.currentTarget.parentNode.innerHTML = ''
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){
  var products = document.getElementsByClassName('product-name')
  var quantity = document.getElementsByClassName('item-qnty')
  var price = document.getElementsByClassName('price')


  for(var i =0; i<items.length; i++){
    window.items = items[i];
    let quantity = quantity[i].value
    let price = price[i].innerText
    let total = quantity * prices
    console.log(total)

  }
  quantity[0].value()
}

function getTotalPrice() {



}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

// function createItemNode(item, price){
//   var itemDiv = document.createElement('div');
//   var itemDiv.setAttribute('class', 'product-name');
//   var itemDiv.setAttribute('id', 'product');
//
//
// }
//
// function createNewItemRow(itemName, itemUnitPrice){
//
//
// }
//
// function createNewItem(){
//   var newItemName = document.getElementById('new-item-name').value;
//   var newItemPrice = document.getElementById('new-item-price').value
//   createNewItemRow(newItemName, newItemPrice)
//
// }



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
