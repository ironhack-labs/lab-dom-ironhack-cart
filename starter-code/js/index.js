
var input = document.getElementById('qty')
var button = document.getElementById('button')
var cantidad = document.getElementById("qty")
var precio = document.getElementById("precio")


function deleteItem(e){
  list.addEventListener('click', e =>{
    list.removeChild(e.target)
  })
}

button.addEventListener("click", ()=>{
  var poner = document.createElement('numero')
  var subtot = cantidad * precio;
  poner.appendChild(subtot)
  subtot.appendChild(poner)
  input.value = ''

})

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
