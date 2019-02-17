window.onload = function(){

  function Product(nombre, precio){
    Product.nombre = nombre;
    Product.precio = precio;
  }
  var productos = [];
  var cantidadProductos = [];

  
crearProducto("IronBubble-head",25);
crearProducto("IronShirt",15);
crearProducto("IronShirt",10);
  
 
  function crearProducto(nombre, precio){
    var producto = new Product(nombre, precio); 
    productos.push(producto);
}


  var contenedorProductos = document.querySelector(".contenedor-productos");
  var productosDOM = [];
  var botonesBorrar = [];



function pintarProducto(producto){
    var item = document.createElement("div");
    item.className = "item";

    var newP = document.createElement("p");
    newP.className = "newProduct";
    newP.innerHTML = Product.nombre;
    item.appendChild(newP);

    var productPrice = document.createElement("p");
    productPrice.className = "oneProductPrice";
    productPrice.innerHTML = Product.precio;
    item.appendChild(productPrice);

    var divQty = document.createElement("div");
    divQty.className = "qty";
    var parrafoQty = document.createElement("p");
    parrafoQty.innerHTML = "QTY";
    divQty.appendChild(parrafoQty);
    var input = document.createElement("input");
    input.type = "number";
    input.className = "unit";
    divQty.appendChild(input);
    item.appendChild(divQty);

    var unitsPrice = document.createElement("p");
    unitsPrice.className = "precioUnidades";
    unitsPrice.innerHTML = "$0.00"
    item.appendChild(unitsPrice);

    var boton = document.createElement("a");
    boton.href = "#";
    boton.className = "btn-delete";
    boton.innerHTML = "Delete";
    botonesBorrar.push(boton);
    item.appendChild(boton);

    productosDOM.push(item);
    contenedorProductos.appendChild(item);
  }
  pintarProducto();
}
