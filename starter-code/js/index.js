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

// $calc.onclick = calcAll;  //¿Por qué la función va sin paréntesis aquí?

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

// Call to calcAll function when quantities of products change
$cart.addEventListener("change", function (e) {
  if (e.target && e.target.matches(".qty input")) {

      // Throw error at negative quantities
      if (e.target.value < 0){
        throw new RangeError('Quantity has to be a positive number');
      }else{
        calcAll();
      }
  }
});



