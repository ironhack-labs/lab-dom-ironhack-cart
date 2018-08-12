console.log("index.js CONNECTED");

var totalPriceItem = document.querySelector(".btn-success");
var prixItem = document.querySelector(".prix-produit");
var quantityProduct = document.querySelector("input");
var newPrice = document.querySelector(".total-unite");



// ITERATION 1
totalPriceItem.onclick = function() {;
newPrice.innerHTML =  "$" + parseFloat(prixItem.innerHTML) * parseFloat(quantityProduct.value);
}

//ITERATION 2
var allProduct = document.querySelectorAll(".produit")
function createItemNode(dataType, itemData){
    totalPriceItem.onclick = function(){
        var totalResult = 0 
    }

}






//function deleteItem(e){}

//function getPriceByProduct(itemNode){}



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