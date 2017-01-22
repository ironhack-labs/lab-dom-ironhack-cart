console.log("hola");





console.log("HE pasado por aqui");

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

  //codigo que recoge y muestra en la carga el coste de un producto
  var costSpan = document.getElementById('cost');
  console.log("codigo de coste sera: ");
  console.log(costSpan);
  console.log("Y la cadena del coste sera");
  var costNumbericString = document.getElementById('cost').innerHTML;
  console.log(costNumbericString);
  console.log("Y el valor de coste en numero entero:");
  var costInteger = parseInt(costNumbericString.substr(1));
  console.log(costInteger);  //este es un factor



  //codigo que captura al apretar el boton el numero de productos que el usuario
  //quiere, multiplica por el coste del elemento, y actualiza el coste total por
  //producto
  var calculatePriceButton = document.getElementsByTagName('button')[1];
  console.log("calculatepriceboton: ");
  console.log(calculatePriceButton);


  calculatePriceButton.onclick=function(){
    var input=document.getElementsByTagName('input')[0];
    var precioTotal=0;
    console.log("input.value deberia ser:");
    console.log(input.value);
    console.log("ha salido?");
    console.log("El coste total de esta adquisición sería");
    console.log(input.value*costInteger);
    precioTotal=input.value*costInteger;
    precioTotal.toString();
    console.log(precioTotal);
    document.getElementById('total').innerHTML=precioTotal;
  };


  //declaraciones originales
  //var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  //calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
