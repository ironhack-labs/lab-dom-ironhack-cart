let unitCost = document.getElementsByClassName("unit-cost")
let quantity = document.getElementsByName("quantity")
let importe = document.getElementsByClassName('importe')
let calculatePrices = document.getElementById("btn-calculate-prices")




function calcularPrecio(){

  for (let i = 0; i < unitCost.length; i++) {
    let unitCostEntered = Number(unitCost[i].innerText)
    let totalUnitario = unitCostEntered * quantity[i].value
  
    importe[i].innerHTML = Number(unitCost[i].innerText) * quantity[i].value 
    importe[i].innerHTML = `$ ${totalUnitario}`

    let costoCarrito = []

    for (let i = 0; i < importe.length; i++){
      costoCarrito.push(importe[i].innerHTML)

    }

    console.log(costoCarrito)




  }

  


  

  // let precioTotal = parseInt(unitCost[0],2)
  // precioTotal = quantity[0] * unitCost
  // console.log(quantity)
  // importe[0].innerHTML = "to be fixed"
}

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

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};



calculatePrices.onclick = calcularPrecio





let boton = document.getElementById('change-color')
let title= document.getElementsByTagName('h1')

function changeColor(){
  if(title[0].style.color === 'blue'){
    title[0].style.color = 'red'
    title[0].innerHTML = 'My first to do list!'
    boton.innerText = "Change color"
  }else{
    title[0].style.color = 'blue'
    title[0].innerHTML = 'Hello my friends'
    boton.innerText = "Return to original color"
  }
  
}

boton.onclick = changeColor
