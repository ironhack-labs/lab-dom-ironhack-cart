
window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');
  var articleList = document.querySelector("#contenedor");
  articleList.addEventListener("click", removeClickedProd);

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

}

function removeClickedProd(e){
  var el = e.target;
  var prodContainer;
  var list;
  if (el.classList.contains("btn-delete")) {
    prodContainer = el.parentNode;
    list = prodContainer.parentNode;
    list.removeChild(prodContainer);
  }
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var price = document.getElementsByClassName("precio")
  var qtty = document.getElementsByTagName("input")
  var total = document.getElementsByClassName("total")
  var suma = document.getElementById("suma")
  var acumulador = 0

  for(var i=0; i < total.length; i++){  
  total[i].innerText = price[i].innerText * qtty[i].value
  acumulador += parseFloat(total[i].innerText)
  }

  suma.innerText = acumulador
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
  var itemName = document.getElementById("nombreArticulo")
  var itemPrice = document.getElementById("precioArticulo")
  var parent = document.getElementById("contenedor")

  var crearArticulo = document.createElement("div")
  crearArticulo.classList = "articulo"
  
  var crearDiv = document.createElement("div")
  crearDiv.classList = "contenedor-divs"
  var crearDiv2 = document.createElement("div")
  crearDiv2.classList = "contenedor-divs"
  var crearDiv3 = document.createElement("div")
  crearDiv3.classList = "contenedor-divs"
  var crearDiv4 = document.createElement("div")
  crearDiv4.classList = "contenedor-divs"

  var crearSpanPesos = document.createElement("span")
  crearSpanPesos.innerText = "$"
  var crearSpanPesos2 = document.createElement("span")
  crearSpanPesos2.innerText = "$"
  var crearSpanNombre = document.createElement("span")
  crearSpanNombre.innerText = itemName.value
  var crearSpanPrecio = document.createElement("span")
  crearSpanPrecio.innerText = itemPrice.value
  crearSpanPrecio.classList = "precio"
  var crearLabelName = document.createElement("label")
  crearLabelName.innerText = "QTY"
  var crearInputQty = document.createElement("input")
  crearInputQty.type = "number"
  crearInputQty.placeholder = "0"
  var crearTotal = document.createElement("span")
  crearTotal.classList = "total"
  crearTotal.innerText = "0.00" 
  var crearBotonEliminar = document.createElement("div")
  crearBotonEliminar.innerText = "Delete"
  crearBotonEliminar.classList = "btn btn-delete"

  parent.appendChild(crearArticulo)
  var articulo = document.getElementsByClassName("articulo")

  articuloActual = articulo[articulo.length - 1]

  articuloActual.appendChild(crearDiv)
  articuloActual.appendChild(crearDiv2)
  articuloActual.appendChild(crearDiv3)
  articuloActual.appendChild(crearDiv4)

  var divs = document.getElementsByClassName("contenedor-divs")

  divs[0 + (4 * (articulo.length - 2))].appendChild(crearSpanNombre)
  
  divs[1 + (4 * (articulo.length - 2))].appendChild(crearSpanPesos)
  divs[1 + (4 * (articulo.length - 2))].appendChild(crearSpanPrecio)
  
  divs[2 + (4 * (articulo.length - 2))].appendChild(crearLabelName)
  divs[2 + (4 * (articulo.length - 2))].appendChild(crearInputQty)
  
  divs[3 + (4 * (articulo.length - 2))].appendChild(crearSpanPesos2)
  divs[3 + (4 * (articulo.length - 2))].appendChild(crearTotal)
  articuloActual.appendChild(crearBotonEliminar)

}


