window.onload = function(){
function Product(name, price){
  this.name = name;
  this.price = price;
}
var productos = [];
var cantidadProductos = []; 

//DOM
var contenedorItems = document.getElementsByClassName("contenedor-productos")[0];
var productosDOM = [];
var cantidadesProductosDOM = [];
var botonesBorrar = [];

crearProducto("IronBubble-head",25);
crearProducto("IronShirt",15);

for(var i = 0; i < productos.length; i++){
    (function(indice){
        cantidadesProductosDOM[indice].onchange = function(){
            cantidadProductos[indice] = cantidadesProductosDOM[indice].value;
            productosDOM[indice].childNodes[3].childNodes[0].innerHTML = "$"+(productos[indice].price * cantidadProductos[indice]);
        }
    })(i);
}


function crearProducto(nombre,precio){
    var producto = new Product(nombre, precio); 
    productos.push(producto);
    cantidadProductos.push(0);
    pintarProducto(producto);
}



function borrarProducto(indiceProducto){
    productos.splice(indiceProducto,1);
    cantidadProductos.splice(indiceProducto,1);
}



function pintarProducto(producto){  
    var item = document.createElement("div");
    item.className = "item";

    var divProducto = document.createElement("div");
    divProducto.className = "product";
    var parrafoProduct = document.createElement("p");
    parrafoProduct.innerHTML = producto.name;
    divProducto.appendChild(parrafoProduct);

    var divPrice = document.createElement("div");
    divPrice.className = "price";
    var parrafoPrice = document.createElement("p");
    parrafoPrice.innerHTML = producto.price;
    divPrice.appendChild(parrafoPrice);
    var divQty = document.createElement("div");
    divQty.className = "qty";
    var parrafoQty = document.createElement("p");
    parrafoQty.innerHTML = "QTY";
    divQty.appendChild(parrafoQty);
    
    var input = document.createElement("input");
    input.type = "number";
    input.className = "unit";
    cantidadesProductosDOM.push(input);
    divQty.appendChild(input);
    var divTotal = document.createElement("div");
    divTotal.className = "totalPrice";
    var parrafoTotal = document.createElement("p");
    parrafoTotal.innerHTML = "$0.00";
    divTotal.appendChild(parrafoTotal);
    var boton = document.createElement("a");
    boton.href = "#";
    boton.className = "btn-delete";
    boton.innerHTML = "Delete";
    botonesBorrar.push(boton);
    item.appendChild(divProducto);
    item.appendChild(divPrice);
    item.appendChild(divQty);
    item.appendChild(divTotal);
    item.appendChild(boton);
    productosDOM.push(item);
    contenedorItems.appendChild(item);
}



}
