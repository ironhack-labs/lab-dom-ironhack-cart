let $cart = document.querySelector('#cart tbody');
let $calc = document.getElementById('calc');

function updateSubtot($product) {
  let subtotal = $product.querySelector(".subtot > span");
  let precioUnitario = $product.querySelector(".pu > span");
  let cantidad = $product.querySelector(".qty input[type = number]").value;
  subtotal.innerText = parseFloat(precioUnitario.innerText) * cantidad;
  return subtotal.innerText; //devuelve string
}

function calcAll() {
  let listaProductos = document.querySelectorAll(".product");
  listaProductos.forEach(updateSubtot);
  console.log(listaProductos);
}

$calc.onclick = calcAll;

function totalSum(){
let totality = document.querySelectorAll(".subtot");
}

/*let myButton = document.getElementsByClassName("btn btn-success");
button.onclick = function(btn){
  btn.preventDefault();
  updateSubtot(ironBubbleHead);
  return subtot > spam * subtot > spam;
 };
 */
//console.log(total);

//var columnas=e.querySelectorAll(".subtot > spam");
 
        // obtenemos los valores de la cantidad y importe
        //var cantidad=parseFloat(columnas[3].);
        //var importe=parseFloat(columnas[3].textContent);
 
        // mostramos el total por fila
        //columnas[3].textContent=(cantidad*importe).toFixed(2);
 
        //total+=cantidad*importe;
    //});
 
    // mostramos la suma total
    //var filas=document.querySelectorAll("#miTabla tfoot tr td");
    //filas[1].textContent=total.toFixed(2);


