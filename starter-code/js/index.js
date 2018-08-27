

window.onload = function(){
  var calculatePriceButton = document.getElementById("btnCalculate");
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
  calculatePriceButton.addEventListener('click',()=>{
    calculaCostoPorProducto();
    calculaCostoTotal();
  })
  
  //Elimina elementos
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () =>{
      deleteItem(i);
    });
  }

  //createItemButton.onclick = createNewItem;
};


function calculaCostoPorProducto(){
  /*ITERACIÓN 1
  var cantidad = document.getElementById("cant").value;
  var precio = document.getElementById("precio").innerHTML;
  var costo = cantidad * precio;
  document.getElementById('costo').innerHTML = costo;
  */

  /*ITERACIÓN2*/
  for(i=0; i< document.getElementsByClassName('cant').length;i++){
    var cant = document.getElementsByClassName('cant')[i].value;
    var precio = document.getElementsByClassName('precio')[i].innerHTML;

    var costo = cant * precio;
    document.getElementsByClassName('costo')[i].innerHTML = costo;
  }
}

//ITERACIÓN 3
function calculaCostoTotal(){
  var ctoTotal = 0;

  for(i=0; i< document.getElementsByClassName('cant').length;i++){
    var cpp = parseFloat(document.getElementsByClassName('costo')[i].innerHTML);
    ctoTotal = ctoTotal + cpp; 
  }
  document.getElementById('total').innerHTML = 'Total Price: $ ' + ctoTotal;
}

function deleteItem(e){
  var elements = document.getElementsByClassName('container');
  console.log("Borar los elementos: "+ elements[e])
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
