var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

//document.body.style.background='red';




function updateSubtot($product) {
  //Metemos en la variable Subtotal, el valor que hay en el valor que le pasamos ($product)
 let subtotal = $product.querySelector('.subtot>span');
 let precioUnitario = $product.querySelector('.pu>span');
 let cantidad = $product.querySelector('.qty input[type=number]').value;
 

 subtotal.innerText=parseInt(precioUnitario.innerText)*cantidad;

 return subtotal.innerText;//devuelve string Importante!!!!
}

function calcAll() {
let listaProductos= document.querySelectorAll('.product');
listaProductos.forEach(updateSubtot);

}

$calc.onclick = calcAll;



