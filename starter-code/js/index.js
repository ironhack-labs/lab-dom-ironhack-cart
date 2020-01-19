var $cart = document.querySelector("#cart tbody"); //crea el carrito en javascript
var $calc = document.getElementById("calc"); //crea el boton calcular en javascript
var $create = document.getElementById("create"); //crea el boton create en javascript

function updateSubtot(product) {
  let price = Number(product.querySelector(".pu span").innerText); // coge el precio existente (valor numero)
  let quantity = Number(product.querySelector(".qty input").value); //coge la cantidad del campo input
  let subtotal = product.querySelector(".subtot span"); // define el campo de 'subtotal' (en principio vacio)
  let value = price * quantity; // multiplica precio por cantidad
  subtotal.innerHTML = value; // lo reintroduce en el html (aqui sucede la magia)
  return value; // devuelve el valor de la multiplicacion para usarlo luego en la suma total
}

function calcAll() {
  let tr = document.querySelectorAll(".product"); //genera una especie de array con todos los productos (todos los rows llamados product)
  let total = 0; // define una variable con el valor total que empieza en 0
  tr.forEach(function(product, i) {//ejecuta una funcion en cada elemento del array con forEach, en cada iteracion usa cada uno de lso elementos del array como input (product)
    let subtotal = updateSubtot(product); // define el subtotal y para ello hace la suma de toda la fila al meterla en la funcion updateSubtot de arriba y la almacena en su variable dentro de esta funcion
    total = total + subtotal; // va sumando el subtotal a la variable total
    let prize = document.querySelector("h2 span"); // define el campo de 'total' (en principio vacio)
    prize.innerHTML = total; // introduce el valor del total en el html
  });
}

function deleteItem(event) {//la funcion se ejecuta cuando clicas (un evento clic de boton tiene valores como el propio boton, cuando, duracion...)
  console.log("delete"); //comprobacion
  let button = event.currentTarget; //de todos los valores del evento clic con que entras en la funcion, .currentTarget selecciona el elemento boton
  let row = button.parentNode.parentNode; //define la variable row como el padre del padre del boton (mirar html)
  row.parentNode.removeChild(row); // elimina la row subiendo al padre y eliminandole a un hijo (que es el mismo LOL)
}

let buttons = document.querySelectorAll(".btn-delete"); //genera una especie de array con todos los botones delete
buttons.forEach(function(button) {//hace un foreach en todos los botones
  button.onclick = deleteItem; //le da a todos los botones la accion onclick de ejecutar la funcion deleteItem
});

function createItem() {
  let newName = document.querySelector(".new input[type='text']").value; // coge del campo text de la fila "new" el valor del nuevo nombre que metes
  let newPrice = document.querySelector(".new input[type='number']").value; //coge del campo input de numeros de la fila 'new' el valor del nuevo numero que metes
  let row = document.querySelector(".product"); //coge una fila random del cuerpo del html
  let newRow = row.cloneNode(true); //hace un clon de esa fila porque si no la mueve y hace movidas rarisimas (bendito google)
  let cart = document.querySelector("#cart tbody"); //pilla todo el carrito como el tbody
  console.log(newRow); //comprobacion
  let name = newRow.querySelector(".name"); //define el campo del nombre en esa nueva fila (vacio o a sustituir)
  let price = newRow.querySelector(".pu span"); //define el campo del precio en esa nueva fila (vacio o a sustituir)
  console.log(newPrice); //comprobacion
  price.innerHTML = newPrice; //mete el nuevo precio en el campo del precio
  name.innerHTML = newName; //mete el nuevo nombre en el campo del nombre
  let button = newRow.querySelector(".btn-delete"); //selecciona el boton de esa nueva fila
  button.onclick = deleteItem; // le da a ese boton la propiedad de invocar la funcion delete
  cart.appendChild(newRow); //le mete esa newrow a la carrito haciendo la magia
}

$create.onclick = createItem; // le da al boton la accion onclic de ejecutar la funcion createItem
$calc.onclick = calcAll; // le da al boton la accion onclick de ejecutar la funcion de calcular

// function updateSubtot($product) {
//   let price= Number(document.querySelector('.product .pu span').innerText);
//   console.log(price)
//   let quantity = Number(document.querySelector('.product .qty input').value);
//   let subtotal = document.querySelector('.product .subtot span');
//   subtotal.innerHTML = price * quantity;
//   return subtotal;
//     // Iteration 1.1

//   }

//   function calcAll() {
//     // Iteration 1.2
//     updateSubtot();
//   }
