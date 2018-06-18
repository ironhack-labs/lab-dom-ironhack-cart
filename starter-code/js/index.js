
function deleteItem(e){

}

function getPriceByProduct(itemNode){

  var paragraph = document.getElementById('precioItem');


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

/* indow.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};*/



/* He estado repasando y he empezado a crearme todo en replit para entender como deberia funcionar para posteriormente incluir 
funciones y variales aplicadas a la manipulacion del dom, basicamente tomo valores los multiplico y los calculo, lo de pasaarlo al dom me va a llevar
mas tiempo, dado que no he conseguido entederlo bien como llevar el javascript a la iteraccion con el html.

var productos = [
  { name: "lorem ipsum",price: 17, qty: 6, finalPrice:function() {return this.price*this.qty;}},
  { name: "producto 2", price: 22, qty: 0, finalPrice:function() {return this.price*this.qty;} },
  { name: "producto 3", price: 34, qty: 26, finalPrice:function() {return this.price*this.qty;} },
  { name: "producto 4", price: 55, qty: 2, finalPrice: function() {return this.price*this.qty;}
  } 
];

function calculateUnitPrices () {
  newArr = []
  for (i = 0; i < productos.length; i++) {
    var x = parseInt(productos[i].price);
    var y = parseInt(productos[i].qty)
    var pvp = x * y;
    newArr.push(pvp)
     
  }
  return (newArr)
}

calculateUnitPrices();

function finish (){
var total = newArr.reduce(function(total, num){ return total + num }, 0);
return ("esta es la suma de todos los productos " + total)
}

finish();


