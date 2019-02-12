
//var productPrice = document.getElementById('prd-price').textContent;
//var productPrice = productPriceBox.getElementsByTagName('p').childNode
//console.log(productPriceBox);


//var productqty = document.getElementById("qty").value;
function deleteItem(e){

}

function getPriceByProduct(itemNode){
var productPrice = document.getElementById('prd-price').textContent;
var productqty = document.getElementById("qty").value;
document.getElementById('qty-price').innerHTML = productPrice * productqty;
document.querySelector('#qty-price').innerHTML = productPrice * productqty;
console.log(productPrice);
console.log(productqty);
console.log(productPrice * productqty);
}

function updatePriceByProduct(productPrice, index){
  var deleteButtons = document.getElementsByClassName('btn-delete');
  for(var i = 0; i<deleteButtons.length ; i++){
    getPriceByProduct()
  }
  
}

function getTotalPrice() {
updatePriceByProduct()
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

// Use at least 3 onclick events

// Use at least one getElementById

// Use at least one getElementsByTagName

// Use at least one getElementsByClassName