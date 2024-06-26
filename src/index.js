// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText; // Seleccionamos Producto, con .innerText extraemos el texto, en este caso 25.00
  const quantity = product.querySelector('.quantity input').value; // con .value obtenemos el valor actual del imput (quantity)
 // Calculamos subtotal
  let priceSubtotal = price * quantity;
  // Obtenemos el elemento DOM  del elemento <span> con la clase subtotal. y mostramos el precio en SubTotal
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText =+ priceSubtotal;
  
  return priceSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* 
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  */
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product'); // Selecionamos todos los productos 
  let totalPrice = 0; // Inicializamos la variable
  for (let i = 0; i < products.length; i++) { // Recorremos todos los elementos Products
    //  producto actual: 
    let updatedProduct= products[i]; 
    // Actualización del subtotal y acumulación en total:
    totalPrice += updateSubtotal(updatedProduct); // Llamamos a la función updateSubtotal 
    console.log(totalPrice);
  }


  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span'); // Obtenemos elemento con #total-value span
  total.innerText = totalPrice; // Extraemos el precio total y lo mostramos en el elemento con #total-value span
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
