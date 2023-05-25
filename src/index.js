// ITERATION 1

function updateSubtotal(product) {
  
  const priceElement = product.querySelector(".price span");  // accedo al elemento precio en el HTML.
  const price = Number(priceElement.innerText);  // accedo al contenido del elemento precio y lo convierto en un número pq la consola indica que originalmente es un string.

  const quantityElement = product.querySelector(".quantity input");  // accedo al elemento quantity en el HTML.
  const quantity = Number(quantityElement.value);  // accedo al value del elemento quantity (ya que es un input) y lo convierto en un número pq la consola indica que originalmente es un string.

  const subtotal = price * quantity;  // creo una constante subtotal que es el resultado de multiplicar el número guardado en precio y el número guardado en quantity.
  const subtotalElement = product.querySelector(".subtotal span");  // accedo al elemento Subtotal en el HTML.
  subtotalElement.innerHTML = subtotal.toFixed(2);  // indico que el contenido que quiero que tenga el elemento Subtotal sea la constante subtotal que hemos declarado antes. Redondeo a dos decimales.

  return subtotal; // quiero que esta función me devuelva el subtotal.
}

function calculateAll() {
  
  // ITERATION 2

  const allProducts = document.getElementsByClassName("product");  // creo una constante que acceda a todos los productos que se encuentran en el HTML.

  Array.from(allProducts).forEach((product) => {  // convierto allProducts en un array e itero sobre el con un forEach.
    updateSubtotal(product)   // indico que por cada producto, se ejecute la función de updateSubtotal y así calculo el subtotal de cada producto. 
  });

  // ITERATION 3

  let totalPrice = 0;  // declaro una variable let que más adelante va a ser la suma total del precio.
  
  Array.from(allProducts).forEach((product) => {  // convierto allProducts en un array e itero sobre él con un forEach.
    totalPrice += updateSubtotal(product);  // indico que por cada producto me vaya sumando el updateSubtotal (que ya indicamos antes que me devuelve el subtotal del producto) a la variable totalPrice.
  });
  
  const totalElement = document.querySelector("#total-value span");  // accedo al elemento del total en el HTML.
  totalElement.innerText = totalPrice.toFixed(2);  // indico que el contenido que tiene el elemento del total sea la variable totalPrice. Redondeo a dos decimales.
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;   // Creo una variable que indique el objetivo sobre el que está ahora mismo el evento. 
  event.target.closest("tr").remove();  // Digo que se elimine al <tr> más cercano al objetivo. De esta manera borramos la fila entera donde se encuentra el botón de remove al que hemos clickado.

  calculateAll();  // Como hay que resetear el total si borramos un elemento, vuelvo a llamar a la función calculateAll() para que vuelva a hacer todo el proceso una vez se ha borrado un elemento.

  }  

// ITERATION 5

function createProduct() {
  
  // TABLA EN EL HTML
  const productTable = document.getElementById("cart");   // Accedo al elemento tabla en HTML.
  const productTableBody = productTable.querySelector("tbody"); // Accedo al elemento cuerpo de la tabla en el HTML.

  // INPUTS EN EL HTML
  const productNameElement = document.querySelector(".create-product > td input"); // Accedo al elemento input del nombre del producto en el HTML. Tambien se puede escribir así (".create-product input[type=text]") <-- para encontrar un atributo en css se utilizan corchetes.
  const productName = productNameElement.value;           // Accedo al valor del input del nombre del producto.
  const productPriceElement = document.querySelector(".create-product > td + td input"); // Accedo al elemento input del precio del producto en el HTML.
  const productPrice = Number(productPriceElement.value);         // Accedo al valor del input del precio del producto. 

  if (productName && productPrice) {                      // Creo una condición que indique que si tanto el campo del nombre del producto como el del precio del producto han sido rellenados me ejecute lo siguiente:

  // NUEVA FILA
  const newRow = document.createElement("tr");            // Creo una nueva fila de la tabla creando un elemento <tr>.
  newRow.classList.add("product");                        // Le doy a esta fila la clase .product que es la misma clase que tienen las otras filas de la tabla en el HTML.

  // CELDA NOMBRE
  const productNameCell = document.createElement("td");   // Creo una nueva celda de la tabla creando un elemento <td>.
  productNameCell.classList.add("name");                  // Le añado a ese elemento <td> la clase .name (esta clase la tienen el resto celdas de nombre de producto en el HTML).
  const spanNameCell = document.createElement("span");    // Creo un elemento <span>. 
  spanNameCell.innerText = productName;                   // Indico que el contenido que tenga ese elemento <span> sea el mismo que el valor del input del nombre del producto (productName).
  productNameCell.appendChild(spanNameCell);              // Adjunto el elemento <span> al elemento <td> creado anteriormente.
  
  // CELDA PRECIO
  const productPriceCell = document.createElement("td");  // Creo una nueva celda de la tabla creando un elemento <td>.
  productPriceCell.classList.add("price");                // Le añado a ese elemento <td> la clase .price (esta clase la tienen el resto de celdas de precio de producto en el HTML).
  productPriceCell.innerText = "$"                        // Le indico que quiero que el elemento <td> de price (la columna price) quiero que tenga un string que sea "$".
  const spanPriceCell = document.createElement("span");   // Creo un elemento <span>.
  spanPriceCell.innerText = productPrice.toFixed(2);      // Indico que el contenido que tenga el elemento <span> sea igual al valor del input del precio de producto (productPrice).
  productPriceCell.appendChild(spanPriceCell);            // Adjunto el elemento <span> al elemento <td> creado anteriormente.

  // CELDA QUANTITY
  const quantityCell = document.createElement("td");      // Creo una nueva celda de la tabla creando un elemento <td>.
  quantityCell.classList.add("quantity");                 // Le añado a ese elemento <td> la clase .quantity (esta clase la tienen el resto de columnas de cantidad de producto en el HTML).
  const inputQuantityCell = document.createElement("input"); // Creo un elemento <input>.
  inputQuantityCell.type = "number";                       // En las siguientes filas metemos todas las características que tiene el elemento input de quantity en el HTML.
  inputQuantityCell.value = "0";
  inputQuantityCell.min = "0";
  inputQuantityCell.placeholder = "Quantity";
  quantityCell.appendChild(inputQuantityCell);            // Adjunto el elemento <input> al elemento <td> creado anteriormente.

  // CELDA SUBTOTAL
  const subtotalCell = document.createElement("td");      // Creo una nueva celda de la tabla creando un nuevo elemento <td>.
  subtotalCell.classList.add("subtotal");                 // Añado al elemento <td> la clase de .subtotal que es la clase que tienen el resto de celdas de subtotal en el HTML.
  subtotalCell.innerText = "$";                           // Indico que el contenido que tenga el elemento <td> sea igual a un string "$".
  const spanSubtotalCell = document.createElement("span");// Creo un elemento <span>
  spanSubtotalCell.innerText = 0;                         // Indico que el contenido que tenga ese elemento <span> sea 0.
  subtotalCell.appendChild(spanSubtotalCell);             // Adjunto el elemento <span> al elemento <td> creado anteriormente.

  // CELDA BOTÓN REMOVE
  const removeButtonCell = document.createElement("td");  // Creo una nueva celda de la tabla creando un elemento <td>.
  removeButtonCell.classList.add("action");               // Añado la clase .action al elemento <td> creado anteriormente ya que es la clase que tienen las celdas del botón Remove en el HTML.
  const removeButton = document.createElement("button");  // Creo un elemento <button>.
  removeButton.classList.add("btn", "btn-remove");        // Añado las clases .btn y .btn-remove al elemento <button>. 
  removeButton.textContent = "Remove";                    // Indico que el texto que tiene dentro el elemento <button> sea "Remove".

  removeButton.addEventListener("click", removeProduct);  // Al nuevo botón de remove que hemos creado le añado un evento que tome la función de removeProduct para que si pulsamos nos borre la fila de ese producto.
  removeButtonCell.appendChild(removeButton);             // Adjunto el elemento <button> a la celda <td> creada anteriormente.   


  // ADJUNTAR LAS CELDAS A LA TABLA
  newRow.append(productNameCell, productPriceCell, quantityCell, subtotalCell, removeButtonCell); // Añado todas las celdas nuevas a la fila creada anteriormente.
  productTableBody.appendChild(newRow); // Añado la fila a la tabla de HTML.

  }

}

window.addEventListener('load', () => {

  const calculatePricesBtn = document.getElementById('calculate'); // Localiza el botón de Calculate Prices en el HTML.
  calculatePricesBtn.addEventListener('click', calculateAll);      // Le da a ese botón un evento que indica que cuando se haga click se ejecuta la función calculateAll.

  const removeButtons = document.getElementsByClassName("btn-remove");  // Localizo los botones de Remove en el HTML.
  Array.from(removeButtons).forEach( button => button.addEventListener("click", removeProduct)); // Convierto esa variable en un array e itero sobre él para a cada botón pasarle un evento que indique que cuando se haga click se ejecute la función removeProduct.

  const createBtn = document.getElementById("create"); // Localizo el botón Create Product en el HTML.
  createBtn.addEventListener("click", createProduct);  // Le añado a ese botón un evento que indique que cuando se haga click se ejecute la función createProduct.

});
