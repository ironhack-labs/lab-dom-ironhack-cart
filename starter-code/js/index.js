function deleteItem(){

  const productos = document.querySelectorAll('.producto') 
  console.log(productos)
  for (let i = 0; i < productos.length; i++) {
    productos[i].style.color = 'red'
    
}

  
}

function getPriceByProduct(){
  let priceUnit = document.getElementById("precioUnidad").innerHTML
  let quantityUnit = document.getElementById("quantity").value
  let totalPrice = priceUnit * quantityUnit
  document.getElementById("numTotal").innerHTML =  totalPrice
}
function getPriceByProduct2(){
  let priceUnitCamiseta = document.getElementById("precioUniCamiseta").innerHTML
  let quantityUnitCamiseta = document.getElementById("quantityCamiseta").value
  let totalPriceCamiseta = priceUnitCamiseta * quantityUnitCamiseta
  document.getElementById("numTotalCamiseta").innerHTML =  totalPriceCamiseta
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

let sumatorio = parseInt(document.getElementById("numTotal").innerHTML)
let sumatorio2 = parseInt(document.getElementById("numTotalCamiseta").innerHTML)
console.log(sumatorio)
let totalCompra = sumatorio + sumatorio2
console.log (totalCompra)
document.getElementById("totalCompraPrecio").innerHTML = totalCompra + "€"

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
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getPriceByProduct;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
