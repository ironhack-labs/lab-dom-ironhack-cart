// TESTES

let x = document.getElementsByClassName("btn").textContent;
let price = document.getElementsByClassName("btn")[1].textContent;
let qty = document.getElementsByClassName("btn")[2].lastChild.textContent;

console.log(x, price, qty);

// EXERCÍCIO

function deleteItem(e){
  document.getElementsbyClassName(e).textContent = '';
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){
  
}

function getTotalPrice() {
  let price = parseFloat(document.getElementsByClassName("btn")[1].textContent);
  let qty = parseFloat(document.getElementsByClassName("btn")[2].lastChild.textContent);
  let totalPrice = price * qty;
  document.getElementsByTagName('span')[2].textContent = totalPrice;
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
