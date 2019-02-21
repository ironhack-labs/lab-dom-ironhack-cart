window.onload = function(){

  function Product(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
  }
  var productos = [];
  var cantidadesProductosDOM = [];
  var contenedorProductos = document.querySelector(".contenedor-productos");
  var productosDOM = [];
  var botonesBorrar = []
  var calculatePrice = document.querySelector(".btn-success");
  var sumaProductos = 0;
  var indivPrice = 0;
  var totalPrice = document.querySelector(".total-amount");
  var botonesBorrar = [];
  var newProduct = document.querySelectorAll(".newP");
  var addProduct = document.querySelector(".addProduct");


  
crearProducto("IronBubble-head",25);
crearProducto("IronShirt",15);
crearProducto("IronShirt",10);

for(var i = 0; i < productos.length; i++){
  (function(indice){
      cantidadesProductosDOM[indice].onchange = function(){
        //creamos una variable arriba donde vamos a meter el valor del índice
          productosDOM[indice].childNodes[3].innerHTML = "$"+(productos[indice].precio * cantidadesProductosDOM[indice].value);
          
        }
  })(i);
}

function calcularPrice(productos){
  calculatePrice.onclick = function(){
    sumaProductos = 0
      var precios = document.querySelectorAll('.precioUnidades')
      precios.forEach(function(e){
        //e, hace refencia al precio?
        sumaProductos += +(e.textContent).replace('$','')
      })
      totalPrice.innerHTML = "$"+ sumaProductos;
      console.log(sumaProductos)
  }
}
calcularPrice(productos);
  

function eliminarProduct(productos){
  for(var i = 0; i < botonesBorrar.length; i++){
    (function(indice){
        botonesBorrar[i].onclick = function(e){
          e.preventDefault();
          console.log(contenedorProductos)
          contenedorProductos.removeChild(contenedorProductos.childNodes[this.dataset.indice]);
          productos.splice(this.dataset.indice,1);
          console.log(productos)
        }
    })(i);
  }
}
eliminarProduct(productos);  
 
  function crearProducto(nombre, precio){
    var producto = new Product(nombre, precio); 
    productos.push(producto);
    //se está pinatndo porque le estamos pasando el producto de abajo que tenemos definido en esta función
    pintarProducto(producto);
};

/*function anadirProduct(){
  contenedorProductos.push(newProduct[0].value && newProduct[1].value); 
  
}
anadirProduct()*/


function pintarProducto(producto){
    var item = document.createElement("div");
    item.className = "item";

    var newP = document.createElement("p");
    newP.className = "newProduct";
    newP.innerHTML = producto.nombre;
    item.appendChild(newP);

    var productPrice = document.createElement("p");
    productPrice.className = "oneProductPrice";
    productPrice.innerHTML = producto.precio;
    item.appendChild(productPrice);

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
    item.appendChild(divQty);

    var unitsPrice = document.createElement("p");
    unitsPrice.className = "precioUnidades";
    unitsPrice.innerHTML = "$0.00"
    item.appendChild(unitsPrice);

    var boton = document.createElement("a");
    boton.href = "#";
    boton.className = "btn-delete";
    boton.innerHTML = "Delete";
    boton.onclick = function(e){
      e.preventDefault();
      contenedorProductos.removeChild(contenedorProductos.childNodes[this.dataset.indice]);
      productosDOM.splice(this.dataset.indice,1);
      botonesBorrar.splice(this.dataset.indice,1);
      for(var i = 0; i < botonesBorrar.length;i++){
          botonesBorrar[i].dataset.indice = i;
      }
  }
    botonesBorrar.push(boton);
    item.appendChild(boton);

    productosDOM.push(item);
    contenedorProductos.appendChild(item);
  }

}


  
