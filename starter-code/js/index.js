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


  calculatePriceButton.onclick = function getTotalPrice() {
    // variable for unit price
    // variable for quantity of items
    // innerhtml to the total id tag

    var unitPrice = document.getElementById("initial");

    var newUnitPrice = unitPrice.innerHTML;
    newUnitPrice = newUnitPrice.slice(1, unitPrice.length);

    console.log(newUnitPrice);

    var quantity = document.querySelector(".quant-class");
    console.log(quantity.value);

    quantity = quantity.value;
    
    var price = quantity * newUnitPrice;
    console.log(price);

    var total = document.getElementById("total") 
    
    total.innerHTML = "$"+price+".00";
   
    // now need to implement code above to work for a second product
    // get t shirt price 
    var secondUnit = document.getElementById("secondUnit");
    var secondUnitPrice = secondUnit.innerHTML;
    secondUnitPrice = secondUnitPrice.slice(1, secondUnit.length);
    console.log(secondUnitPrice);

    // get the quantity of t shirts user requests
    var shirtQuantity = document.querySelector(".shirt-quant");

    console.log(shirtQuantity.value);

    shirtQuantity = shirtQuantity.value;

    // calculate total price: t shirts * quantity
    var shirtPrice = shirtQuantity * secondUnitPrice;
    console.log(shirtPrice);

    var shirtTotal = document.getElementById("shirt-total");

    shirtTotal.innerHTML = "$"+shirtPrice+".00";

    // change total price h2 tag to show total amount based on user selection
    var shopTotal = document.getElementById("totalPriceH2");

    var completeTotal = shirtTotal + total;

    shopTotal.innerHTML = completeTotal;
    console.log(shopTotal);
 
  };


  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
