function deleteItem(e){

}




var totalCost;





function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

  //Get all the rows in the page (This will also gives us rows we may want)

  // var allRows = document.querySelectorAll(".row");
  //
  // var productRows = [];

  //Filter rows to include only ones with productPrice
  // allRows.forEach(function (row) {
  //   if (row.querySelector('.product')=== true) {
  //     productRows.push(row);
  //   }
  // });

  // console.log("these are the " + productRows);
for (i = 0; i <= 1; i++ ){

  var costText = document.getElementsByClassName('cost')[i];
  var cost = parseInt(costText.innerHTML);
  var input = document.getElementsByClassName('cantidad')[i];
  var quantity = parseInt(input.value);

  var sumLabel = document.getElementsByClassName('sumTotal')[i];

  totalCost = cost * quantity;

  sumLabel.innerHTML = "$" + totalCost.toString();

  console.log(totalCost);

}

// var arr = [70, 30, 100, 50];
// var total = 0;
//
// for (var i = 0; i < arr.length; i++) {
//   total += parseInt(arr[i]);
// }
// console.log(total);

// total: 250


var allSumLabels = document.getElementsByClassName('sumTotal');
var prices = 0;

 for (var i = 0; i < allSumLabels.length; i++){

   var costText = document.getElementsByClassName('cost')[i];
   var cost = parseInt(costText.innerHTML);
   var input = document.getElementsByClassName('cantidad')[i];
   var quantity = parseInt(input.value);

   prices += cost * quantity;

  var totalSumado = document.getElementsByClassName('totalSumado')[0];
  totalSumado.innerHTML = prices.toString();
 }

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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
