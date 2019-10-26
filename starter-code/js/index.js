var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
var $erase = document.getElementById('erase');

function updateSubtot($product) {
  // Iteration 1.1
  //Creamos la variable subtotal.
  /* Cogemos de $product a través de
  querySelector buscamos un elementos 
  de clase "subtot" y seleccionamos el
  valor de su elemento 'span' y se lo 
  asignamos a la variable subtotal.  */
  let subtotal = $product.querySelector('.subtot>span');
  /* Cogemos de $product a través de
  querySelector buscamos un elementos 
  de clase "pu" y seleccionamos el
  valor de su elemento 'span' y se 
  lo asignamos a la variable precioUnitario.  */
  let precioUnitario = $product.querySelector('.pu>span');
  /* Cogemos de $product a través de
  querySelector buscamos un elementos 
  de clase "qty" y seleccionamos el
  elemento 'imput[type=number]' y 
  asignamos el valor de su 'value' a la variable cantidad.  */
  let cantidad = $product.querySelector('.qty input[type=number]').value;
  /* La propiedad innerText de subtotal
  le asignamos el valor de el valor del 
  innertext de precioUnitario multiplicado 
  por la variable cantidad y esa multiplicación
  la transformamos en un Int(Un entero) */
  subtotal.innerText = parseInt(precioUnitario.innerText) * cantidad;

  /* Devuelve el resultado en formato String 
  porque estamos hablando del contenido innerText en html.
  Y lo asigna al span de la clase subtot (dicho anteriormente
    en la variable declarada subtot*/
  return subtotal.innerText;

}

function calcAll() {
  // Iteration 1.2 
  /* Creamos la variable listaProductos y 
  seleccionamos en el documento todos los "product" */
  let listaProductos = document.querySelectorAll('.product');
  /* Ahora le decimos que en esa lista de productos
  que hemos generado, en CADA PRODUCTO se llame 
  a la funcion updateSubtot para que devuelva 
  el valor del subtotal correspondiente. */
  listaProductos.forEach(updateSubtot);

  let total = document.querySelector('h2>span');
  let acum = 0;
  for (var i = 0; i < listaProductos.length; i++) {
    acum += parseFloat(listaProductos[i].querySelector(".subtot>span").innerText);
  }
  total.innerText = acum;
}


function deleteEl() {
  var elem = document.querySelector('product');
  elem.parentNode.removeChild(elem);
  
  
}


$calc.onclick = calcAll;
$erase.onClick = deleteEl;
/*
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  } */
