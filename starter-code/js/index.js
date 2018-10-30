// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }


// Cant get the for loop to run 
function getTotalPrice(){
  totalCost = 0;
  let price = document.getElementsByClassName('priceColumn'[0]);
  console.log(price);
  let qty = document.getElementsByClassName('quantity'[0]);
  console.log(qty);
  let total = document.getElementsByClassName('cost')[0];
  console.log(total);
  // let overallTotal = document.getElementsByClassName('totalTotal'[0]);
  // let returnTotalValue = 0;
  for(let i = 0; i <= qty.length; i++){
    let currentPrice = Number(price.innerHTML);
    let currentQty = Number(qty.value);
    let currentTotal = 0;
    currentTotal += currentPrice * currentQty;
    total[i].value = currentTotal;
  }
}

// var calculateButton = document.getElementsByClassName("calc");

// calculateButton.onclick = function(){
// let price = document.getElementsByClassName("priceColumn")[0];
// let qty = document.getElementsByClassName("quantity")[0];
// let cost = document.getElementsByClassName("cost");
// let totalResult = 0;
// let currentQty = Number(qty[i].value);
// let currentPrice = Number(price[i].innerHTML);
//   for(let i = 0; i <= qty.length; i++){
//     console.log("hey");

//     totalResult += currentQty * currentPrice;
//   }
//   console.log(totalResult);
//   cost.innerHTML = totalResult;
// }

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
// // };

// this code works - using it for reference while trying to make it better
// var calculatePriceButton = document.getElementById("calc-prices-button");
// calculatePriceButton.onclick = function() {
//   let price = document.getElementsByClassName("price")[0];
//   let priceTwo = document.getElementsByClassName("price")[1];
//   let quantity = document.getElementsByClassName("quantity")[0];
//   let quantityTwo = document.getElementsByClassName("quantity")[1];
//   let total = document.getElementById("total");
//   let totalTwo = document.getElementById("total2");
//   let resultTwo = priceTwo.innerHTML * quantityTwo.value;
//   let result = price.innerHTML * quantity.value;
//   totalTwo.innerHTML = "$" + resultTwo;
//   total.innerHTML = "$" + result;
//   let finalResult = result + resultTwo;
//   var totalTotal = document.getElementById("totalTotal");
//   totalTotal.innerHTML = "$" + finalResult;
// }
