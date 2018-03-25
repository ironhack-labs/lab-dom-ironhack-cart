function deleteItem(e) {
  var boton = e.currentTarget.parentNode; //controlo el evento, y le asigno un padre,
  // lo que nos interesa es subir un nivel más de padre ( si no nos estariamos refiriendo al botón solo)
  var padreBoton = boton.parentNode; //está apuntando al div= producto y diciendo que es su padre.
  // creamos el objeto body
  var body = document.getElementsByTagName("body")[0];
  //eliminamos de body el bloque de producto
  body.removeChild(padreBoton);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {


  var producto = document.getElementsByClassName("producto"); //creamos el objeto de producto.

  for(var i = 0; i < producto.length; i++){ // recorremos todo el objeto creado.
    //accedemos a cada posición y a cada clase, y guardamos el value
    var costeUnitario = producto[i].getElementsByClassName("coste-unitario")[0].getAttribute("value");
    var quantity = producto[i].getElementsByClassName("quantity")[0].value;
    var totalPrecio = producto[i].getElementsByClassName("total-precio")[0];
    //guardamos el resultado en totalPrecio en value y en el html, con esto obtenemos le resutlado de cada 
    //producto.
    totalPrecio.setAttribute("value", costeUnitario * quantity);
    totalPrecio.innerHTML = costeUnitario * quantity;
  }
  //creamos otro objeto con todos los precios totoales para luego podr sumarlos.
      var sumaTotal = document.getElementsByClassName("total-precio");
      var contador = 0;//almacenamos en contador el total de cada producto.
      for(var j = 0; j<sumaTotal.length; j++){
        contador += parseInt(sumaTotal[j].getAttribute("value"));//metemos en contador la suma de cada precio hay que hacerle
                                                                 //paseInt porque sino en vez de sumar te concatena como texto.
      }
      document.getElementById("suma-total").innerHTML = contador + " $";//modificamos el texto de la suma total por el valor de contador.

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
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};