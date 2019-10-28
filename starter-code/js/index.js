var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

//hace la multiplicacion de priceUnit*Quantity y la pone en el subtotal
function updateSubtot($product) {
  let priceUnit = $product.children[2].children[0].children[0].value; //nos da el valor de Quantity, se pone value porque nos traemos su valor
  let totalUnits = $product.children[1].children[0].innerHTML; //nos da el valor de PriceUnit, se pone innerHTML porq el valor es fijo
  let totalPrice = priceUnit * totalUnits; //hace la multiplicacion y la guarda en totalPrice
  let subtotalPosition = $product.children[3].children[0]; //posicion del span que contiene el subtotal para luego hacerle innerText
  subtotalPosition.innerText = totalPrice; // metenemos el valor de la multiplicacion en el span de subtotal con innerText

  return totalPrice; //devolvemos la multiplicacion para cuando llame funcion calcAll pasarsela y que haga todas las sumas
}

// Iteration 1.1 - se ejecuta cuando damos al boton de calculate prices
function calcAll() {
  let rows = document.getElementsByClassName("product"); //trabaja sobre el HTMLCollection
  let allRows = [...rows]; //trabaja sobre el array de filas
  //let row = document.getElementsByClassName("product")[0] //contiene la primera fila

  //bucle que recorra todas las filas y sume el sub-total llamando a la funcion updateSubtot
  let sumTotal = 0;
  for (i = 0; i < allRows.length; i++) {
    let res = updateSubtot(allRows[i]);
    sumTotal += res;
  }

  //actualiza el valor de total
  let accumulatedTotal = document.getElementsByTagName("h2")[0].lastElementChild;
  // posicion del span donde se encuentra el valor del total (tiene que ser del span y no del valor exacto para poder cambiarle el valor con el innerText)
  accumulatedTotal.innerText = sumTotal; //cambia el valor de total y le añade la sumaTotal con el innerText
}

//Hace que se eliminen las filas pulsando el boton de delete
let target = document.getElementsByClassName("btn-delete"); //nos da el HTMLCollection (array), del boton de delete (todos los botones que tengamos)
let nuevo = document.getElementsByTagName("tbody")[0]; //nos da el padre de las filas que es la etiqueta tbody
for (let i = 0; i < target.length; i++) {
  //para todos los botones de delete que tengamos
  let row = document.getElementsByClassName("product")[i]; //nos da la etiqueta de fila
  target[i].onclick = function () {
    //por cada boton que cliquemos
    nuevo.removeChild(row); //eliminamos esa fila poniendo primero el padre
  };
}


$calc.onclick = calcAll;



/*
//intentos de crear nuveas filas -- no funciona

let target2 = document.getElementById('create')
let rows2 = document.getElementsByClassName("product")[0];
let positionNewProduct = document.getElementsByClassName("new")[0].children[0]
  .children[0].value; //coge el valor que le metamos a ProductName en el momento de crear
let positionNewPrice = document.getElementsByClassName("new")[0].children[1]
  .children[0].value; //coge el valor que le metamos a PriceUnit en el momento de crear

target2.onclick = function createRow() {
  nuevo.insertRow(rows);
  // var row = document.getElementById("rowToClone"); // find row to copy
  var table = document.getElementById("tableToModify"); // find table to append to
  var clone = rows2.cloneNode(true); // copy children too
  // clone.id = "newID"; // change id or other attributes/contents
  table.appendChild(clone); // add new row to end of table

  var rows = document.createElement('product'); // create row node
  var col = document.createElement('name'); // create column node
  var col2 = document.createElement('pu'); // create second column node
  var col3 = document.createElement('qty');
  var col4 = document.createElement('subtotal');
  var col5 = document.createElement('rm');
  positionNewProduct.appendChild(col); // append first column to row
  positionNewPrice.appendChild(col2); // append second column to row
  rows2.appendChild(col3);
  //rows2.appendChild(col4);
  col3.innerHTML = "";
  col4.innerHTML = "";
  // col.innerHTML = "sdf";
  var table = document.getElementById("tableToModify"); // find table to append to
  table.appendChild(row); // append row to table
}


let positionProdName = document.getElementsByClassName("name")[0].children[0]; //posicion del span del texto de productName
let positionPriceUnit = document.getElementsByClassName("pu")[0].children[0]; //posicion del span del precio de priceUnit
let positionCreate = document.getElementById("create"); //posicion del boton de crear
let positionNewProduct = document.getElementsByClassName("new")[0].children[0]
  .children[0].value; //coge el valor que le metamos a ProductName en el momento de crear
let positionNewPrice = document.getElementsByClassName("new")[0].children[1]
  .children[0].value; //coge el valor que le metamos a PriceUnit en el momento de crear
let rows = document.getElementsByTagName("tbody")[0]; //nos da cada una de las filas
let rowsAlFinal = document.getElementsByTagName("tbody")[0].lastElementChild

let padre = document.getElementsByTagName("tfoot")[0]; //padre del boton Create
let nueva = document.getElementsByClassName("product")[0];
console.log(rowsAlFinal)
//for (let i = 0; i < positionCreate.length; i++) {
positionCreate.onclick = function() {
  nuevo.insertRow(rows); //esta metiendo filas vacias al principio de los productos
};
//}
//console.log(rows)
*/


//ANTERIOR

/*
let puObject = document.getElementsByClassName("pu");
let quantity = document.getElementsByClassName("qty");

const arr = [...puObject]
const arr2 = [...quantity]
*/

//antiguo para borrar las filas
/*let target = document.getElementsByClassName('btn-delete')[0]

target.onclick = function () {
  let nuevo = document.getElementsByTagName("tbody")[0]
  let row = document.getElementsByClassName("product")[0]
  // let button = event.currentTarget
  nuevo.removeChild(row)
}

/*let sumTotal = 0
for (i = 0; i < allRows.length; i++) {
  let res = updateSubtot(allRows[i])
  sumTotal += res
}
let accumulatedTotal = document.getElementsByTagName('h2')[0].lastElementChild
accumulatedTotal.innerText = sumTotal


let target = document.getElementsByClassName('btn-delete')[0]

let nuevo = document.getElementsByTagName("tbody")[0]
console.log(nuevo)
// for (let i = 0; i < target.length; i++) {
target.onclick = function () {
  // let button = event.currentTarget
  nuevo.removeChild(row)
  console.log("hola")
}
}

*/
