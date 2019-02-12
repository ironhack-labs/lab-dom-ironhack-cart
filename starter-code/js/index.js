function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() { 
  var c = document.getElementsByClassName("price")
  var total = 0;
  for (i = 0; i < c.length; i++) {
    var price = parseFloat(document.querySelectorAll('.price')[i].textContent);
    var q = document.getElementById("units").value;
    var quantity = q[i];
    total= document.querySelectorAll('.total-price')[i].textContent = price * quantity;
}

console.log(total)
    //var price = parseFloat(document.querySelectorAll('.price')[0].textContent);
    //var quantity = document.getElementById("units").value;
    //var total = document.querySelectorAll('.total-price')[0].textContent = price * quantity;
    
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
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


