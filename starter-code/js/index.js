function deleteItem(e){
e.currentTarget.parentNode.parentNode.remove();
}

function getPriceByProduct(itemNode){
  var total = document.getElementsByClassName('total-price-span');
  var coste = document.getElementsByClassName('cost-span');
  var valor = document.getElementsByClassName('units-number');
  for (i = 0; i < valor.length; i++) {
    if(parseInt(valor[i].value)>0){
      total[i].innerHTML= (parseInt(coste[i].innerHTML) * parseInt(valor[i].value))+".00";
    }
    else{
      total[i].innerHTML="0.00"
    }
  }
   }
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
