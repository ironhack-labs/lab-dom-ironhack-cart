// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span');
  price = price.innerHTML;

  let quantity = product.querySelector('input');

  let subtotal1 = price * quantity.value;

  let subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = subtotal1;
}


function calculateAll() {
 
  // ITERATION 2

  const rubberDuck = document.querySelector('.rubberDuck');
  const beachTowel = document.querySelector('.beachTowel');

  updateSubtotal(rubberDuck);
  updateSubtotal(beachTowel);


  // ITERATION 3
  
  let subtotalRubberDuck = document.querySelector('.rubberDuck .subtotal span');
  subtotalRubberDuck = subtotalRubberDuck.innerHTML;
  subtotalRubberDuck = parseFloat(subtotalRubberDuck);

  let subtotalBeachTowel = document.querySelector('.beachTowel .subtotal span');
  subtotalBeachTowel = subtotalBeachTowel.innerHTML;
  subtotalBeachTowel = parseFloat(subtotalBeachTowel);

  let total1 = subtotalRubberDuck + subtotalBeachTowel;

  let total = document.querySelector('#total-value span');
  total.innerHTML = total1;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  /* Esta parte es la de los botones "remove" pero no funciona.
  Mi idea era: como me devuelve un array con los 2 botones, era con la variable "index"
  captar el indice de la posicion de los botones y luego incluirlo en el addEventListener
  Para buscar el fallo hice un typeof a "element" y me da en consola 2 objetos y ese es
  el problema, intentar buscar el indice de la los objetos como si fuesen arrays.
  */

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach(element => {
    // console.log(typeof element);
    let index = removeProductBtn.indexOf("element");
    removeProductBtn[index].addEventListener('click', removeProduct);
  });


  //... your code goes here


});