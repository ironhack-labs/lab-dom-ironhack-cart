var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

//1. Calc subtotal
function updateSubtot($product) {

  let priceUnit = $product.querySelector('.pu span').innerText;
  let quantity = $product.querySelector('.qty input').value;
  let subtotal = $product.querySelector('.subtot span');
  let subtotalVal = priceUnit * quantity;

  subtotal.innerHTML = subtotalVal;
  return subtotalVal;
}


//2-3. Present subtotal of each row and total price at the bottom
function calcAll() {
  let total = 0;
  let productsArr = [...document.querySelectorAll('.product')];

  for (let i = 0; i < productsArr.length; i++) {
    updateSubtot(productsArr[i]);
    total += updateSubtot(productsArr[i]);
  }

  document.querySelector('h2 span').innerHTML = total
}

$calc.onclick = calcAll;  //¿Por qué la función va sin paréntesis aquí?

//4.  Detect which delete button was clicked and remove its product row
function deleteRow(e) {
  let productRow = e.target.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);
}

//Event delegation
$cart.addEventListener("click", function (e) {
  if (e.target && e.target.matches(".btn-delete")) {
    deleteRow(e);
  }
});

//5. Let's create a new product
const newProductBtn = document.querySelector('#create');
let productRow = document.querySelector('.product:last-child');

newProductBtn.onclick = function () {
  let cloneProductRow = productRow.cloneNode(true);
  let newProductName = document.querySelector('.new input[type="text"]');
  let newProductPrice = document.querySelector('.new input[type="number"]');

  // Content of the new product
  cloneProductRow.querySelector('.name span').innerText = newProductName.value;
  cloneProductRow.querySelector('.pu span').innerText = newProductPrice.value;
  cloneProductRow.querySelector('.qty input').value = 0;
  cloneProductRow.querySelector('.subtot span').innerText = 0;

  //Check product
  if (newProductName.value == ""){
    alert('Por favor, indica el nombre del producto');
  } else if (newProductPrice.value == ""){
    alert('Por favor, indica el precio del producto');
  }else {
    $cart.appendChild(cloneProductRow);
  }

  //Clean inputs
  newProductName.value = "";
  newProductPrice.value = "";
}

//Mejoras
//1. Borrar el valor de los inputs del footer al crear un nuevo producto
//2. Actualizar subtotal y total al modificar la cantidad de cualquier producto
//3. Mejorar el estilo con un framework de css y hacerlo responsive
//4. No permitir que un producto se cree sin haber especificado nombre y precio 
//5. Cuando se borran todos los rows, no se pueden crear más porque no tiene original del que clonar 
//6. No permitir cantidades negativas de

