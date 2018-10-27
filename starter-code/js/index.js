function deleteItem(e){

}

function getPriceByProduct(itemNode){
  
  
}


function updatePriceByProduct(productPrice, index){
  document.getElementsByClassName('total')[index].innerHTML =`$${productPrice}`;
  
}

function getTotalPrice() {
  var elements = document.getElementsByClassName('prices').length;
  for(i=0;i < elements; i++){
    var oneprice = document.getElementsByClassName('prices')[i].textContent.substring(1)
    var quantity = document.getElementsByTagName('input')[i].value;
    oneprice = parseFloat(oneprice);
    quantity = parseInt(quantity);
    var mountprice = oneprice * quantity;
    updatePriceByProduct(mountprice, i);
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
  //createItemButton.onclick = createNewItem;
  
  


  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
