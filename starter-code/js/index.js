var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
let remove = document.querySelectorAll('.btn btn-delete');



function updateSubtot($product) {
  //Metemos en la variable Subtotal, el valor que hay en la etiqueta del DOM con clase .subtot de su hijo span
 let subtotal = $product.querySelector('.subtot>span');
  //Metemos en la variable precioUnitario, el valor que hay en la etiqueta del DOM con clase .pu de su hijo span
 let precioUnitario = $product.querySelector('.pu>span');
  //Metemos en la variable Subtotal, el valor que hay en la etiqueta con clase .qty e indicamos que de la etiqueta input[de tipo number] nos de el valor que hay en value
 let cantidad = $product.querySelector('.qty input[type=number]').value;

  //Indicamos que lo que hay dentro de subtotal (innerText)=(parseFloat es para que si hay decimales, los coja e interprete como número decimal), multiplique lo que hay dentro de la variable precioUnitario y multiplique por lo que hay en la variable cantidad
 subtotal.innerText=parseFloat(precioUnitario.innerText)*cantidad;
  //devuelve, respetando los decimales lo que hay dentro de subtotal
 return parseFloat(subtotal.innerText);//devuelve string Importante!!!!
}

function calcAll() {
  //creamos variable para crear objeto de los productos
let listaProductos= document.querySelectorAll('.product');
  //inicializamos a 0 la variable totalPrice
let totalPrice=0;
  //creamos bucle para que recorra el objeto listaProductos
for(let i=0; i<listaProductos.length; i++){
  //metemos en totalPrice la suma de los subtotales
totalPrice+=updateSubtot(listaProductos[i])
}
  //introducimos en la etiqueta span dentro del h2 el valor de la variable totalPrice
document.querySelector('h2 span').innerText=totalPrice;
}

$calc.onclick = calcAll;

function btnRemove(){
  
}

remove.onclick = btnRemove

