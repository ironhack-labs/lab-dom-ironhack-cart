// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //Step 1

  const price = product.querySelector('.price span');
  console.log(price.textContent);
  const quantity = product.querySelector('.quantity input');
  console.log(quantity);

  // Step 2

  // Step 3
  let finalPrice = price.textContent * quantity.value;
  console.log(finalPrice);

  //Step 4 
  const subtotal = product.querySelector(".subtotal span");
  subtotal.textContent = finalPrice;

  return finalPrice;
}




function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2

  let totalPrice = document.querySelector("#total-value span"); // Nueva variable que tiene como valor: el tag que hemos creado dentro index.html que es un etiqueta de h2 con id: total value
  console.log(totalPrice);
  const products = document.querySelectorAll(".product") //variable que creamos que selecciona todos las etiquetas que tienen como clase (.product), en este caso, dos, la que ya había y la que hemos creado

  let sum = 0; //variable numérica que empieza en cero

  products.forEach(function (eachProduct) { //el Bucle coge todos los elementos que estén dentro de la variable products que acabamos de crear, en este caso, 2, la función forEach "pasa" cada elemento a function (eachProduct) [(eachProduct)= es una convención que sacó Judit de los apuntes de Germán] 
    // Lo que hace ahora es activar la función updateSubtotal (definida en la iteration1) y le manda como argumento (eachProduct), que representa cada elemento que hemos seleccionado en la variable products con el querySelectorAll
    sum += updateSubtotal(eachProduct);
  }
  )

  // ITERATION 3
  totalPrice.innerHTML = sum;
  console.log(totalPrice);




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

  //... your code goes here
});
