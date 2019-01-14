function deleteItem(e){
  

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var products = document.querySelectorAll(".flex-container")
  var pricefinal = 0

  for(var i = 0; i < products.length; i++){
    qty = products[i].querySelector(".qty").value

    unid = products[i].querySelector(".precioUni").innerHTML
   
    valor = unid.split("$")
   
    products[i].querySelector(".final").innerHTML = valor[1] * qty + " $"
   
    pricefinal += valor[1] * qty

  }
  document.querySelector("#totalPrice").innerHTML = pricefinal + " $"
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



Contraer 
Entrada de mensaje
