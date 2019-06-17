let prices = document.getElementsByClassName('price')
let qtys = document.getElementsByTagName('input')
let totalPrices = document.getElementsByClassName('price-by-prod')
let numPrices = []
let finalPrices = []

function getPriceByProduct(itemNode){ 
  for(let i = 0; i < prices.length; i++){
    let theprice = prices[i].innerText.split("")
    theprice.shift()
    numPrices.push(theprice.join(""))	
  }
  return numPrices
}

function updatePriceByProduct(productPrice, index){
  finalPrices = []
  for(let j = 0; j < qtys.length; j++) {
    finalPrices.push(numPrices[j] * qtys[j].value)
  }
  return finalPrices  
}

function getTotalPrice() {
  getPriceByProduct()
  updatePriceByProduct()
  for (i=0; i<totalPrices.length; i++) {
    totalPrices[i].innerText = `$${finalPrices[i]}.00`
  }
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
