let prices = document.getElementsByClassName('price')
let qtys = document.getElementsByTagName('input')
let totalPrices = document.getElementsByClassName('price-by-prod')

let numPrices = []
let finalPrices = []
let sumPrices = 0

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
  sumPrices = 0
  let global = document.getElementById('globalPrice')
  for (let k = 0; k < totalPrices.length; k++) {
    sumPrices += finalPrices[k]
    totalPrices[k].innerText = `$${finalPrices[k]}.00`
  }
  global.innerText =`$${sumPrices}.00` 
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
