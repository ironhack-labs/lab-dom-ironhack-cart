function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
var precio = document.getElementsByClassName("precio-x");
var quantidad = document.getElementsByClassName("quantidad-y") // precio y quantidad son arrays // Las clase siempre son array
var totalPrice = 0;
for (var i = 0; i < quantidad.length; i++){
  document.getElementsByClassName("totalP")[i].innerHTML="$" + (precio[i].innerHTML.slice(1) * quantidad[i].value).toFixed(2);
  totalPrice += (precio[i].innerHTML.slice(1) * quantidad[i].value).toFixed(2); // .innerHTML car on va l'envoyer au DOM ! "$" porque el precio tiene el dollar // [i] porque la mejor formar de capturar esos elementos es hacerlo en un ARRAY en este momento iteracion 1, es un elemento // precio    // Quantidad: .value porque como se puede escribir ahi en "number" se llama value y es lo que queremos capturar  // cuando esta escrito hay que poney innerHTML cuando hay que escribirlo : .value  // .slice(1) car solo queremos lo que sigue el $ para que sea un numero y no un string : $25.00
  
}
document.getElementById("gran-total").innerHTML ="$"+totalPrice;
}



function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){
g
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
