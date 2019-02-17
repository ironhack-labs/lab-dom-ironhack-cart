function deleteItem(e){

}
//Event listener over the button
var button = document.getElementById("calculate-button");
button.onclick = function(){
  //pick up the price, the amount of objets and the total amount of cost
  var precio= document.getElementById("product-price").innerHTML;
  var cantidad= document.getElementById("qty").value;
  var total=parseFloat(precio.replace('$', ''))*cantidad;
  //Empty the sum price div so we can add later the final price
  var contentDiv = document.getElementById('final-price');
  contentDiv.innerHTML = ""
//add the sum of the price
  var text =document.createTextNode(total) 
  var finalPrice=document.getElementById("final-price")
  finalPrice.appendChild(text)
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
