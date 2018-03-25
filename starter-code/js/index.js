
  ///////////////////////////////////
  // CALCULATE PRICES
  ///////////////////////////////////
  
var calculateBtn = document.getElementsByClassName("btn-success")[0];
  
calculateBtn.onclick = function() {
  
  var totalPrices = document.querySelectorAll(".total-price");
  var quantities = document.querySelectorAll(".unit-quantity");
  var unitPrices = document.querySelectorAll(".unit-price");
  var globalPrice = document.getElementsByClassName("global-price")[0];
  var counter = 0;
  
  for(var i=0; i<unitPrices.length; i++) {
    totalPrices[i].innerHTML = Number(quantities[i].value) * Number(unitPrices[i].innerHTML);
    counter += Number(totalPrices[i].innerHTML);
  }
  globalPrice.innerHTML = counter;
  
};


///////////////////////////////////
// DELETE BUTTONS
///////////////////////////////////

var deleteButton1 = document.querySelectorAll(".btn-delete")[0];
// Selects the first delete button

deleteButton1.onclick = function() {
  
  // Identifies the parent node of the clicked button
  console.log(deleteButton1.parentNode);
  
};
  
  // Delects the button's parent node
  // Deletes the whole parent
  






  ///////////////////////////////////
  // OLD WAY
  ///////////////////////////////////
  //   // FIRST PRODUCT
  //   var unitPrice = document.getElementById("unit-price").innerHTML;
  //   var unitPrice = Number(unitPrice);
  //   var quantity = document.getElementById("units").value;
  //   var quantity = Number(quantity);
  //   var totalPrice = document.getElementById("total-price");
  //   totalPrice.innerHTML = unitPrice * quantity;
  //   var inputField = document.getElementById("units");
  //   inputField.value = "";
  
  //   // SECOND PRODUCT
  //   var unitPrice2 = document.getElementById("unit-price2").innerHTML;
  //   var unitPrice2 = Number(unitPrice2);
  //   var quantity2 = document.getElementById("units2").value;
  //   var quantity2 = Number(quantity2);
  //   var totalPrice2 = document.getElementById("total-price2");
  //   totalPrice2.innerHTML = unitPrice2 * quantity2;
  //   var inputField2 = document.getElementById("units2");
  //   inputField2.value = "";
    
  //   // GET GLOBAL PRICE
  //   globalPrice.innerHTML = 
  //       Number(totalPrice.innerHTML)
  //     + Number(totalPrice2.innerHTML);
  // };
  
  
  

















///////////////////////////////////
// I commented those lines, because I didn't know what use to make of them?
///////////////////////////////////

// function deleteItem(e){

// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {

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

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// }
