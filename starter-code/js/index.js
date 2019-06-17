let prices = document.getElementsByClassName('price')
let numPrices = []
let qtys = document.getElementsByTagName('input')

function getPriceByProduct(itemNode){
  for(let i = 0; i < prices.length; i++){
    let theprice = prices[i].innerText.split("")
    theprice.shift()
    numPrices.push(theprice.join(""))	
  }
}

function updatePriceByProduct(productPrice, index){
  
}

function getTotalPrice() {
  
}

// function deleteItem(e){

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //   deleteButtons[i].onclick = deleteItem;
  // }
};
