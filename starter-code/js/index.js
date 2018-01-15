function deleteItem(e){
  // Busco el elemento padre que quiero eliminiar empezando por el target
  // En este caso el target es el button su padre es el div que le envuelve
  // y el padre de este es el div que engloba la fila.
  var searchParent = e.currentTarget.parentNode.parentNode;
  var foundParent = searchParent.parentNode;
  foundParent.removeChild(searchParent);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  // Obtengo los valores de precio unidad y cantidad y los multiplico
  var array = document.getElementsByClassName("total-price");
  var importeTotal = 0;
  for (i = 0; i<array.length; i++){
    var totalPrice = document.getElementsByClassName("total-price").innerHTML =
    document.getElementsByClassName("unit-price")[i].innerText *
    document.getElementsByClassName("quantity-items")[i].value;
    document.getElementsByClassName("total-price")[i].innerHTML=parseInt(totalPrice);
    importeTotal += totalPrice;

    console.log(importeTotal);
  }

  document.getElementById("importe-total").innerHTML=parseInt(importeTotal);
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
