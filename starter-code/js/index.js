//var button = d

function getUnitPrice(productPriceIndex){
    var unitPrice = document.querySelectorAll(".unit-price")[productPriceIndex].innerText;
      return parseInt(unitPrice)
}

getUnitPrice(0);


function getUnitQuantity(productQuantityIndex){
    var unitQuantity = document.querySelectorAll(".unit-quantity")[productQuantityIndex].value;
        return parseInt(unitQuantity);      
}


getUnitQuantity(0);




//NEED TO ACCOUNT FOR DECIMALS?
document.getElementById("calc-button").onclick = function(){
        document.querySelectorAll(".total-unit-price").forEach(function(element, index){
            element.innerHTML = getUnitPrice(index) * getUnitQuantity(index);
        })
}





    
/*
function deleteItem(e){
    
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