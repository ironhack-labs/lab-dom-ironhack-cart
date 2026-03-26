// ITERATION 1


  // product es el nombre de la fila dentro de la tabla
function updateSubtotal(product) {

  // creo las variables dónde almacenar el contenido de las td
  // también creo la variable de subTotal, para después sustituir el subtotal.
  // apunto a la etiqueda span porque son las que contienen el dato útil.
  // para eso uso queryselector.

  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  let subTotal = product.querySelector(".subtotal span")

  // hago la operación matemática y la almaceno en la variable subTotal
  // la etiqueta input requiere .value
  subTotal.innerText = price.innerText * quantity.value

}

// ITERATION 2: declaro la variable productAll, y lo inicializo como un array
// compuesto por cada elemento clase .product (los productos)
// por último aplico a ese array la función .forEach, que le dice, por cada
// producto, aplicale la función updateSubtotal de la primera iteración.

function calculateAll() {
  let productAll = document.querySelectorAll(".product");
  productAll.forEach(product => { updateSubtotal(product)});

  let total = document.querySelector("#total-value span");
  let subtotals = document.querySelectorAll(".subtotal span");



 // ITERATION 3

 // Declaro la variable totalPrice, donde voy a almacenar el sumatorio de subtotales,
 // luego con un bucle for voy sumando según el index del producto en la table.
 // Esto es erróneo ya que al crear y eliminar filas, los index se desbarajuntan,
 // probablemente tengo que aplicar forEach o algo similar. Cuando haga el repaso.

  let totalPrice = 0

  for (let i = 0; i < subtotals.length; i++) {
    totalPrice += Number(subtotals[i].innerText);
  }

 total.innerText = totalPrice;  
}





// ITERATION 4


function removeProduct(event) {
  // target fija la referencia al nodo dentro del DOM dónde ocurre la función
  const target = event.currentTarget;
  // declaro la variable que hace referencia a que voy a borrar. Uso target y 
  // le aplico dos veces ".parentNode" que sube un paso en la jerarquía DOM.
  const rowRemoved = target.parentNode.parentNode;
  // ahora a partir de la definición de "qué se borra" declaro una variable 
  // indicando al padre (para usar la función removeChild)
  const parentTable = rowRemoved.parentNode;
  // aplico al padre (tbody) removeChild, que elimina el producto referenciado.
  parentTable.removeChild(rowRemoved);

}

// ITERATION 5

function createProduct() {

  //declaro una variable para el nuevo elemento al que llamaré luego. Le doy clase product.
const newProduct = document.createElement("tr");
newProduct.classList.add("product");

// declaro la variable tBody, que llama al tbody dentro de la tabla id cart (dónde irá la fila).
const tBody = document.querySelector("#cart tbody");

// ahora a tbody le aplico la función appendChild, que crea un hijo e indico que ese hijo es la variable
// que cree al inicio de la función
tBody.appendChild(newProduct);

// creada la fila, formateo su contenido pegando la estructura html e intercalando las llamadas a objetos
// de javascript "newPPrice" y "newPName", ids que agregué a los input en el tfoot descomentado. Aún queda
// por unificar el criterio estético de los decimales en los precios de las filas creadas.
newProduct.innerHTML = `
  <td class="name">
    <span>${document.getElementById("newPName").value}</span>
  </td>
  <td class="price">$<span>${document.getElementById("newPPrice").value}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

// Apaño el problema del "load", ya que al crearse el elemento temporalmente después de los addEventListener, 
// el botón remove quedaba sordo. Se añade un nuevo addEventListener.

const newRemoveBtn = newProduct.querySelector('.btn-remove');
newRemoveBtn.addEventListener('click', removeProduct);

}



window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
    });
  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
  
  });

  