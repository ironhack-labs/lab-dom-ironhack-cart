

function deleteItem(e){

}

function getPriceByProduct(){
  let itemNode = document.getElementsByClassName('cost');
  for(let i=0; i < itemNode.length; i +=1 ){
    itemNode = itemNode[i].innerText;
    finalValue = itemNode[i].split('');
    finalValue = finalValue.slice(1);
    finalValue = finalValue.join('');
    console.log(finalValue);
  }
  return finalValue;
}

function updatePriceByProduct(){
let productPrice = document.getElementsByClassName('quantity');


}

function getTotalPrice(price,total) {
  let total = 0;
  for (let i = 0; i < arrTotalPrice.length; i += 1) {
    total += parseFloat(arrTotalPrice[i].textContent.split('').slice(1).join(''));
  }
  document.getElementById('total-price').innerHTML = `Total Price: $${total.toFixed(2)}`;
}
  // var array1 = [1, 4, 9, 16];

  // // pass a function to map
  // const map1 = array1.map(x => x * 2)

function createQuantityInput(){

}


function createDeleteButton(i) {

  }

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

//function createNewItemRow(itemName, itemUnitPrice){
function createNewRow(newElementId, parentElementId, elementType, className) {

}

function createNewItem(){

}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice();
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
