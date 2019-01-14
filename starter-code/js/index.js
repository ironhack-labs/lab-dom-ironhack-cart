function calcPrices(){
  
  //evil array of prices
  const prices0 = Array.from(document.getElementsByClassName("price"));
  let prices = []
  for(let i = 0; i < prices0.length; i += 1) {
    prices.push(prices0[i].innerHTML);
  }
  console.log(prices)
  
  //good array of quantities
  const qtys0 = Array.from(document.getElementsByClassName("qty"));
  let qtys = []
  
  for(let i = 0; i < qtys0.length; i += 1) {
    qtys.push(qtys0[i].value);
  }
  console.log(qtys)
  
  //calculating
  const merc = Array.from(document.getElementsByClassName("mercadoria"))
  let total = 0 
  let sum=0
  for(let i = 0; i < qtys0.length; i += 1){
    total=prices[i]*qtys[i];
    sum+=prices[i]*qtys[i];
    document.getElementsByClassName("mercadoria")[i].childNodes[7].innerHTML=total
  }
  document.getElementById("totalPrice").innerHTML=" Total Price = " + sum
    console.log("total price = " + sum)

}

const merc = Array.from(document.getElementsByClassName("mercadoria"))
console.log(merc)

function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

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

  // calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
