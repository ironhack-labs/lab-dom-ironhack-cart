const qtyIntem = document.querySelectorAll("input")
const product = document.querySelector(".product") 
const name = document.querySelector('.pr-name')
const priceStr = document.querySelectorAll(".pr-price")
const deleteBtn = document.querySelector('.btn-delete')
const clacBtn = document.querySelector('.btn-success')
const itemTotal = document.querySelector(".item-total")



function deleteItem(e){

}

function getPriceByProduct(itemNode){
  const priceNum = parseInt(itemNode[0].textContent.substring(1))
  return priceNum
}

function updatePriceByProduct(){
  itemTotal.textContent = `$${getTotalPrice()}.00`
}

function getTotalPrice() {
 return getPriceByProduct(priceStr)*createQuantityInput()
}

function createQuantityInput(){
  return qtyIntem[0].value
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

clacBtn.onclick = function(){
  updatePriceByProduct()
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

 //calculatePriceButton.onclick = getTotalPrice;
 //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
