function deleteItem(e){
    document.getElementById("principal").removeChild(e.currentTarget.parentNode.parentNode);
    let venta = document.getElementById("totalVenta");
    venta.innerText = "";
}

function getTotalPrice() {

  var datosProductos = document.getElementsByClassName("producto");
  let unitarioProducto;
  let cantidadProducto;
  let totalVenta = 0;
  Array.prototype.forEach.call(datosProductos,function(producto){
    Array.prototype.forEach.call(producto.children,function(elemento){
      Array.prototype.forEach.call(elemento.children,function(valor){
        if(valor.id === "unitarioProducto"){
          if(valor.innerText.indexOf("$")!=-1)
            unitarioProducto=valor.innerText.substring(1);
          else
            unitarioProducto=valor.innerText;
        }
        if(valor.id === "cantidadProducto"){
          if(valor.value.length>0)
            cantidadProducto=valor.value;
          else
            cantidadProducto=0;
        }
        if(valor.id === "totalProducto"){
          valor.innerText="$" + (parseFloat(unitarioProducto)*parseFloat(cantidadProducto));
          totalVenta = totalVenta + (parseFloat(unitarioProducto)*parseFloat(cantidadProducto));
        }
      })
    })
  });

  let venta = document.getElementById("totalVenta");
  console.log(venta);
  venta.innerText = "Total Price: " + totalVenta;
}

function createQuantityInput(){
  var input = document.createElement("input");
  input.setAttribute("id","cantidadProducto");
  input.setAttribute("type","text");
  input.setAttribute("minlength","4");
  input.setAttribute("maxlength","8");
  input.setAttribute("size","10");
  return input;
}

function createDeleteButton(dataType, itemData){
  var item = document.createElement("div");
  item.setAttribute("class","ancho");
  var boton = document.createElement("button");
  boton.setAttribute("class","btn btn-delete");
  boton.setAttribute("type","button");
  boton.innerText="Delete";
  boton.onclick = deleteItem;
  item.appendChild(boton);
  dataType.appendChild(item);
}

function createQuantityNode(dataType, itemData){
  var item = document.createElement("div");
  item.setAttribute("class","ancho");
  var label = document.createElement("label");
  console.log(label);
  label.innerText = "Qty";
  item.appendChild(label);

  item.appendChild(createQuantityInput());
  dataType.appendChild(item);
}

function createItemNode(dataType, itemData){
  var item = document.createElement("div");
  item.setAttribute("class","ancho");
  var spanItem = document.createElement("span");
  var spanText = itemData;
  spanItem.appendChild(spanText);
  item.appendChild(spanItem);
  dataType.appendChild(item);
}

function createPriceNode(dataType, itemData){
  var item = document.createElement("div");
  item.setAttribute("class","ancho");
  var spanItem = document.createElement("span");
  spanItem.setAttribute("id","unitarioProducto")
  var spanText = itemData;
  spanItem.appendChild(spanText);
  item.appendChild(spanItem);
  dataType.appendChild(item);
}

function createPrecioTotal(dataType, itemData){
  var item = document.createElement("div");
  item.setAttribute("class","ancho");
  var spanItem = document.createElement("span");
  spanItem.setAttribute("id","totalProducto");
  var spanText = itemData;
  spanItem.appendChild(spanText);
  item.appendChild(spanItem);
  dataType.appendChild(item);
}

function createNewItem(){
  if(document.getElementById("nombreProducto").value.length>0 &&
    document.getElementById("precioProducto").value.length>0){
    console.log("Entra crea item");
    var firstChild;
    var elementoProducto = document.getElementById("principal");
    var producto = document.createElement("div");
    producto.setAttribute("class","producto");

    //Inserta nombre producto
    createItemNode(producto,document.createTextNode(document.getElementById("nombreProducto").value));

    //Inserta Costo unitario
    createPriceNode(producto,document.createTextNode(document.getElementById("precioProducto").value));

    //Inserta cantidad
    createQuantityNode(producto,"");

    //Inserta precio Total Producto
    createPrecioTotal(producto,document.createTextNode("$0.00"));

    //Inserta Boton Delete
    createDeleteButton(producto,"");

    firstChild = document.getElementById("nuevo");
    elementoProducto.insertBefore(producto,firstChild);
    var nombreProducto = document.getElementById("nombreProducto");
    var precioProducto = document.getElementById("precioProducto");
    precioProducto.value="";
    nombreProducto.value="";
    let venta = document.getElementById("totalVenta");
    venta.innerText = "";
  }
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    console.log(deleteButtons);
    deleteButtons[i].onclick = deleteItem;
  }
};
