function deleteItem(e){

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
  var cantidad = document.getElementById('cantidad');
  var precio = document.getElementById('precio');
  var sumaTotal = document.getElementById('sumaTotal');
  
  calculatePriceButton.addEventListener('click', calcular);

  //funcion de calcular
  function calcular(event){
  event.preventDefault();
  precio.split("$").pop();
  var qty = parseFloat(cantidad.value);
  
  var price = parseFloat(precio);
  
 
  total = qty * price;
  sumaTotal.innerHTML=total;
 
} 

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
