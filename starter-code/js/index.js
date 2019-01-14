// TESTES

let x = Array.from(document.getElementsByClassName("btn"));
let price = Array.from(document.getElementsByClassName("btn")[1].textContent);
let qty = Array.from(document.getElementsByClassName("btn")[2].lastChild.textContent);

console.log(x);
console.log(price);
console.log(qty);

// EXERCÍCIO

function deleteItem(e){
  document.getElementsbyClassName(e).textContent = '';
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){
  
}

function getTotalPrice() {
  let price = parseFloat(Array.from(document.getElementsByClassName("btn")[1].textContent));
  let qty = parseFloat(Array.from(document.getElementsByClassName("btn")[2].lastChild.textContent));
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

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
