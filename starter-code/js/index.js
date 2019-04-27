//Variables
let unitPrice = document.getElementById("cost")
let userInput = document.getElementById("user-input")
userInput.value = 1;
let calculatePriceButton = document.querySelector(".btn-success")
let totalPrice = document.querySelector("#total-price") 
// Button working
//calculatePriceButton.onclick = () => {console.log("oeoe")}
calculatePriceButton.onclick = () => {getTotalPrice()}





function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}


function getTotalPrice() {
    let result = unitPrice.innerText * parseInt(userInput.value)
    //console.log(result)
    //return result
    totalPrice.innerHTML = result;
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
  //var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  
  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
