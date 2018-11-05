var button = document.getElementById("calcula")

function calculatePrices(){
  var precio1 = document.getElementById("preciop1")
  var precio1int = parseFloat(precio1)
  var cantidad1 = document.getElementById("cantidadp1")
  var span1 = document.getElementById("totalp1")
  var totp1 = precio1int.value * input.value
  span1.innerText = totp1
  //span1.innerText = cantidad1.value
  var precio2 = document.getElementById("preciop2")
  var precio2int = parseFloat(precio2)
  var cantidad2 = document.getElementById("cantidadp2")
  var span2 = document.getElementById("totalp2")
  var totp2 = precio2int.value * input.value
  span2.innerText = totp2
  //span2.innerText = cantidad2.value
}

/*
function calculatePrices(){
  getPriceByProduct()
  var cantidad1 = document.getElementById("cantidadp1")
  var span1 = document.getElementById("totalp1")
  var totalp1 = precio1.value * cantidad1.value
  span1.innerText = "$ "+(cantidad1.value*precio1.value)
}
*/

function deleteItem(e){
  var divTags = document.getElementsByTagName('div');
    for(var i=0; i < divTags.length; i++){
    divTags[i].onclick = function(e){
      divTags[i].removeChild()
  }
}
}

function getPriceByProduct(itemNode){
  var precio1 = document.getElementById("preciop1")
  var precio2 = document.getElementById("preciop2")
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  
  var totTotal = document.getElementById("totaltotal").innerText = sumaTotal
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
