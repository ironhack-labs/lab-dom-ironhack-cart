function deleteItem(e){

}

function getPriceByProduct(itemNode){

  var priceDollar = itemNode.textContent; //or .innerHTML
  var priceNumber = parseFloat(priceDollar.replace(/[^0-9-.]/g, ''));
  return priceNumber;

}

function getQuantityByProduct(itemNode){

  var quantityString = itemNode.value;
  var quantityNumber = parseInt(quantityString, 10);
  return quantityNumber;

}

function updatePriceByProduct(){

  var arrQuantity = Array.from(document.getElementsByClassName("input-qt"));
  var arrPrice = document.getElementsByClassName("price");
  var arrPriceTotal = document.getElementsByClassName('total-price');
  var sum = 0;

  arrQuantity.forEach(function(item, index){
    var totalPrices = getTotalPrice(item, index, arrPrice)
    sum += totalPrices;
    arrPriceTotal[index].innerText = "$" + totalPrices.toString();
  });

  var finalTotalPrices = document.getElementById("final-total-price"); //no .textContent at the end
  finalTotalPrices.innerText = sum;

}

function getTotalPrice(item, index, arrPrice) {

  var totalPrice = getQuantityByProduct(item) * getPriceByProduct(arrPrice[index]).toFixed(2);
  return totalPrice;

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




function main () {

  var calculatePriceButton = document.getElementById('calc-prices-button');
  calculatePriceButton.addEventListener("click", updatePriceByProduct);

  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i=0; i<deleteButtons.length; i++){
    deleteButtons.addEventListener("click", deleteItem)
  };

}

window.addEventListener("load", main);



// function getTotalPrice(price, quantity) {

//   var quantityInfo = document.getElementById("input-qt");
//   var quantityString = quantityInfo.value;
//   var quantityNumber = parseInt(quantityString, 10);

//   var priceInfo = document.getElementById("price"); 
//   var priceDollar = priceInfo.textContent; //or .innerHTML
//   var priceNumber = parseFloat(priceDollar.replace(/[^0-9-.]/g, ''));
  
//   var priceTotal = document.getElementById('total-price');
//   priceTotal.innerText = "$" + (quantityNumber * priceNumber).toFixed(2).toString();

// }
