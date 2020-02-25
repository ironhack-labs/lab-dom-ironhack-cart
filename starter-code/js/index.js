var $cart = document.querySelectorAll('#cart tbody')[0];
var $calc = document.getElementById('calc');
var $create = document.getElementById('create');

function updateSubtot($product) {
  // Iteration 1.1
  //Generamos una variable que sustraya el 25$
  let precio = $product.querySelectorAll('.pu span')[0].innerText;
  //Otra variable para la cantidad mostrada
  let qty = $product.querySelectorAll('.qty input')[0].value;
  //Sumatorio de las dos cosas
  let total = precio * qty;
  //Asignamos valor actual al subtotal del producto
  $product.querySelector('.subtot span').innerHTML=total;
  return total;
}

function calcAll() {
  // Iteration 1.2
    //primero sacamos las filas que hay en la clase .product
    let filas = document.querySelectorAll('.product').length;
    //coloco un valor inicial total que ira sumando
    let total = 0;
        //Empezamos el loop por cada row
        for (let i = 0; i<filas; i++) {
        // utilizamos una variable y le asignamos un valor para la fila
                let fila= document.querySelectorAll('.product')[i];
                //y aquí añadimos al total el valor de la fila sacado por la funcion
                total += updateSubtot(fila);  
        }
    //cambiamos el valor total de todos los productos
    document.querySelectorAll('h2 span')[0].innerHTML = total;
    return total;
}
//Si, es cutre y se que no debo hacerlo. Pero no encuentro otra solución...not yet...
let count=1;
function createButton(){
  //creo la variable para el primer valor
  let nameProduct = document.querySelectorAll('.new input')[0].value;
  //creo la variable infernal para el segundo valor
  let priceProduct = document.querySelectorAll('.new input')[1].value;
  //let priceProduct = document.document.querySelectorAll('.new td')[0].nextSibling.nextElementSibling.childNodes[1].value;
  //ahora creo con la información clonando el tbode y el tr
  //esta variable va bien, hasta que te quedas sin compra en la cesa... xD
  let newRow = document.querySelector("tbody tr").cloneNode(true)
  //exporto la información rellenada
  newRow.querySelector(".name span").innerHTML = nameProduct;
  newRow.querySelector(".pu span").innerHTML = priceProduct;
  //Añado un hijo al padre
  $cart.appendChild(newRow);
  //Intento vaciar los nuevos
  let arra = document.querySelectorAll('tbody tr').length
  document.querySelectorAll('.new input')[0].value="";
  document.querySelectorAll('.new input')[1].value="";
  //Con estos dos no copiaremos los datos de la primera tabla
  document.querySelectorAll('.product input')[count].value=0;
  document.querySelectorAll('.subtot span')[count].innerHTML="";
  //contamos en el contador
  count++;
  //volvemos a activar la botonera
  eli();  
}

function deleteButton(e){
  //con los resultados de eli borramos el item que no queremos
  e.currentTarget.parentElement.parentElement.remove();
  //llamamos al calcAll para recalcular
  calcAll();
  //descontamos en el contador
  count--;
}

function eli(){
  //Asignamos el array de los botones
  let borrarBoton = document.querySelectorAll('.btn-delete');
  //hacemos un loop para que vaya metiendo un evento en cada uno de ellos
  for (let i=0;borrarBoton.length;i++){
    borrarBoton[i].addEventListener('click', deleteButton);
    }
}


$create.onclick = createButton;
$calc.onclick = calcAll;
//con esto activamos la botonera de borrar
eli();