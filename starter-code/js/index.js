window.onload = function(){

// function deleteItem(e){


// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

function getTotalPrice() {
  console.log("coucou");
  var itemUnit = document.querySelector("input").value;
  var itemPrice = document.querySelector(".cost-per-unit").innerHTML;

  var ro = itemUnit * itemPrice;
  document.querySelector(".total").innerHTML = "$" + ro;
}

var calculatePriceButton = document.querySelector('#calc-prices-button');

calculatePriceButton.onclick = function() {
  getTotalPrice();
}




// var newStudd= document.up
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
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
};
