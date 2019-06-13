let totalPrice = document.getElementById('totalPrice')
let quantity = document.getElementById('qty')
let cost = document.getElementById('cost')
let calculatePriceButton = document.getElementById('calc-prices-button');
let createItemButton = document.getElementById('new-item-create');
let deleteButtons = document.getElementsByClassName('btn-delete');

// window.onload = function(){
//   createItemButton.onclick = createNewItem();
//   for(let i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let money = parseFloat(cost.innerText.slice(1)) * quantity.value
  console.log(parseFloat(cost.innerText.slice(1)))
  totalPrice.innerText = `$ ${money}.00`
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

calculatePriceButton.addEventListener('click', () => {
  getTotalPrice()
})
