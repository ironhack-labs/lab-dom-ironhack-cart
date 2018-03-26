/*

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

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
*/

function main () {

var costArray = document.querySelectorAll(".cost");
var quantityArray = document.querySelectorAll(".quantity");
var totalPrice = 0;


var calculateButton = document.getElementById("calculate-btn");
var totalAmmount = document.querySelector(".total");

  var calculatePrice = function() {
      for (var i = 0; i < quantityArray.length; i++) {
        totalPrice+= costArray[i] * quantityArray[i];
      }
      // calculateButton.removeEventListener
      console.log("monkeyBusiness");
     totalAmmount.innerHTML = totalPrice;
  };
  
  calculateButton.addEventListener("click", calculatePrice )
                 
        
  

                 
                 
                 
}

main()