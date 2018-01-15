'use strict';

function productTotal (){
  console.log('Calculate prices CLICKED');
  var pricesArray = htmlCollectionToInnerHTMLArray('unit-cost');
  var multiplesArray = htmlCollectionToValueArray('qty-input');
  var grandTotal = 0.00;
    for (var j = 0; j < pricesArray.length; j++){
      var productTotal = (pricesArray[j]) * (multiplesArray[j]);
      document.getElementsByClassName('cost-output')[j].innerHTML = productTotal;
      grandTotal = grandTotal + productTotal;
    }
  document.getElementById('grand-total').innerHTML = '$' + grandTotal; 
  console.log(pricesArray);
  console.log(multiplesArray);
  console.log(grandTotal); 
}

function createNewItem (){
  console.log('createNewItem CLICKED');//tether- to do
}

function deleteItem () {
  console.log('deleteItem CLICKED');
}

//--------htmlCollectionToInnerHTMLArray function----------
//pass it: (HTML Collection, String [Class name])
//warning: only produces array of Floats
function htmlCollectionToInnerHTMLArray(myClassName) {
  var myHtmlColl = document.getElementsByClassName(myClassName);
    var someArray = [];
    var myElement = 0;
          for (var i = 0; i < myHtmlColl.length ; i++) {
            myElement = myHtmlColl[i].innerHTML;
            someArray.push(parseFloat(myElement));
          }
  return someArray;    
}

//--------htmlCollectionToValueArray function----------
//pass it: (HTML Collection, String [Class name])
//warning: only produces array of Ints
function htmlCollectionToValueArray(myClassName) {
  var myHtmlColl = document.getElementsByClassName(myClassName);
    var someArray = [];
    var myElement = 0;
          for (var i = 0; i < myHtmlColl.length ; i++) {
            myElement = myHtmlColl[i].value;
            someArray.push(parseInt(myElement));
          }
  return someArray;    
}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = productTotal;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

/* function deleteItem(e){

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

} */





/* JUNK - FOR REFERENCE */

/* var prices = document.getElementsByClassName('unit-cost');
  var pricesArray = [];
    for (var i = 0; i < prices.length ; i++) {
      price = prices[i].innerHTML;
      pricesArray.push(parseFloat(price));
      console.log(price);
    }  
  console.log(pricesArray); */

  //document.getElementsByClassName('cost-output').innerHTML = multiple * prices;