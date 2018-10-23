function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let productTotalsArr = [...document.getElementsByClassName('total')]

  let total = document.getElementById('total');

  let qtyArr = [...document.getElementsByClassName('qty')]
          .map(input => input.value);

  let pricesArr = [...document.getElementsByClassName('price')]
          .map(price => price.textContent)
          .map(price => price.trim());

  let finalPrices = [];

  for(let i = 0; i < pricesArr.length; i++){
    finalPrices.push(pricesArr[i] * qtyArr[i]);
  }
  for(let i = 0; i < finalPrices.length; i++){
    productTotalsArr[i].textContent = finalPrices[i];
  }
  //option#2
  // productTotalsArr.map(total => {
  //   for(let i = 0; i < finalPrices.length; i++){
  //       total.textContent = finalPrices[i];
  //     }
  // });
  let totalPrice = finalPrices.reduce((sum,price) => sum + Number(price),0);

  total.innerHTML = totalPrice;

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
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
