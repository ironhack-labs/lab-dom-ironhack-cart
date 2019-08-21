// const test = document.getElementById('unitPrice').innerText;
// console.log(test)
// input.addEventListener('keydown', function (event) {
//   event.preventDefault();
//   console.log(event);
//   console.log('In first listener');
// });

/*
let calculatePrice = document.getElementById('calc-prices-button')

let calculateAcumulade = document.getElementById('acumulate');

 calculateAcumulade.addEventListener('click', function(event){
   let amount = parseInt(document.getElementById('unitPrice').innerText) * document.getElementById('quantity');
   return document.getElementById('acumulate');
});
*/


function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let unitPrice = document.getElementById('unitPrice').textContent;
  let input = document.getElementById('input').value; //este es el label con la cantidad
  let totalPrice = unitPrice * input;

  //return;
}

function createQuantityInput(){
  // let input = document.getElementById('input').value;
  // let unitPrice = document.getElementById('unitPrice').textContent;
  // let acumulate= unitPrice * input;
  // return document.getElementById('acumulate');
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
