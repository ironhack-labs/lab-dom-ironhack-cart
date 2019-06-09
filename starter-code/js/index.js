function deleteItem(e){

}



function getPriceByProduct(itemNode){
   let productname = document.getElementsByClassName("product-name")[0];
   
   let name1 = productname.innerHTML;
    itemNode = name1;
   
   let productPrice = document.getElementsByClassName("cost-unit")[0].innerHTML
   if(itemNode)
    return productPrice
  }



function updatePriceByProduct(productPrice, index){



}

function getTotalPrice() {

}
let createQuantityInput = document.getElementsByTagName("input");

createQuantityInput.onclick = function() {
   return createQuantityInput[1].innerHTML;
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
