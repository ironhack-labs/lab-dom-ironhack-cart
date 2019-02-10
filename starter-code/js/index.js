function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

 
function getTotalPrice() {
  // Tomamos elementos de la seccion .product
   var campoPrecioUnitario = document.getElementById("priceUnit").innerText;
   var precioUnitNumber = parseFloat(campoPrecioUnitario.substring(1, campoPrecioUnitario.length));
   //console.log(precioUnitNumber);
   var campoCantidad = document.getElementById("quantity").value;
  // Sumamos el precio del producto y su cantidad
   var precioTotal = precioUnitNumber * campoCantidad; 
   //console.log(precioTotal);
  // Insertamos subtotal en html
   document.getElementById("priceTotal").innerHTML = precioTotal;
   //almacenamos subtotales en nuevo Array
  newArr = [];
  for (var i = 0; i <= document.getElementsByClassName("product").length; i++) {
   newArr.push(precioTotal)
  } 
  // Aplicamos un reduce para conseguir el sumatorio
  reducer = function(ac, elm){
   return ac + elm
  }
  var totalPriceProducts = newArr.reduce(reducer)
  // Insertamos sumatorio en html
  document.getElementById("totalProdPric").innerHTML = precioTotal;
  return
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
