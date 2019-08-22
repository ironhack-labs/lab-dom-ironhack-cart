function deleteItem(e){
  //document.removeChild
  //paretNode escoger el papa de este nodo
    const buttonP = e.target.parentNode
    document.querySelector("#div-products").removeChild(buttonP)

}

function getPriceByProduct(itemNode){
  const precioUni=itemNode.querySelector("#precio")
  const cantidad = itemNode.querySelector("#cantidad")

  const constTotal= (precioUni.innerText)*(cantidad.value)
  const imprimeTotal=itemNode.querySelector("#subtotal")
  imprimeTotal.innerText=constTotal;
  
  return constTotal

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  let sumaTotal = 0;
  const obtenProduct= document.querySelectorAll("#producto")
  console.log(obtenProduct)
  for(i=0; i<obtenProduct.length; i++) {
    sumaTotal+= getPriceByProduct(obtenProduct[i])
  }
  //console.log(sumaTotal)
  const h2total = document.querySelector("#totalprice")
  h2total.innerText= sumaTotal 
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
  console.log(dataType);
  console.log(itemData)

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  const producto= document.getElementById('input-product-name') 
  const precio= document.getElementById('input-product-price') 
  createItemNode(producto, precio);

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

//console.log(deleteButtons)

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
