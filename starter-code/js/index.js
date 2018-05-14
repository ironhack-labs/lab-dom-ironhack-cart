window.onload = function(){

  let fixedPriceString = document.getElementById("fixedPrice").textContent.replace(/\D/g,'').slice(0,-2);
  let fixedPriceInteger = parseInt(fixedPriceString);

  let totalPrice = document.getElementById("totalPrice");

  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');


  calculatePriceButton.onclick = function() {
    
    let quantityString = document.getElementById("quantity").value;
    let quantityInteger = parseInt(quantityString);  

    let totalPriceResult = getTotalPrice(fixedPriceInteger, quantityInteger);
      totalPrice.innerHTML = totalPriceResult;
    }  

  }
  
  //

  // createItemButton.onclick = createNewItem;

  // for(var i = 0; i<deleteButtons.length ; i++){
  //  deleteButtons[i].onclick = deleteItem;
  // }


function deleteItem(e){
    
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice(fixedPrice, quantity) {
    let total = fixedPrice * quantity;
    return total;
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
