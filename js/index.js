// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //Capturamos los dos elementos del DOM 'price' y 'quantity' y los almacenamos en una variable respectivamente
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  //comprobamos que el valor de las dos variable son numeros para poder operar con ellos 
  // console.log(typeof price);
  // console.log(typeof quantity);

  //Almacenamos los elementos 'price' y 'quantity' en una nueva variable  parseandolos!! para poder obtener su valor respectivamente. (ya que uno 'price' es un string con decimales y debemos convertirlos a numeros para poder operar con el) 
  let valorPrice=parseFloat(price.innerHTML);
  let valorQuan=parseInt(quantity.value);
  //Comprobamos que el valor de las dos variable son numeros para poder operar con ellos 
  // console.log(valorPrice);
  // console.log(valorQuan);

  //Creamos la variable 'subTotal' y realizamos la multiplicacion de 'valorPrice' por 'valorQuan' para obtener el subTotal del producto.
  let subTotal=valorPrice*valorQuan;
  
  //Seteamos (agregamos) el resultado de 'subTotal' del product para que se refleje en el html 
  product.querySelector('.subtotal span').innerHTML=subTotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // Para Coger a todos los elementos 'product' utilizamos document.querySelectorAll(''); (si utilizamos querySelector('') solo llamaria al primero que se encuentre).
  let products = document.querySelectorAll('.product'); 
  // console.log(products)

  //Recorremos el DOM con el loop 'forEach' para volver a ejecutar la funcion anterior 'updateSubtotal' y actualizar el 'subtotal' en todos los elementos 'product' que hemos recogido en la variable 'Products'. 
  products.forEach(eachProduct => {
    updateSubtotal(eachProduct);
  });



  //... your code goes here
  // Creamos una variable a cero llamada 'total' donde almacenaremos la suma de los 'subtotales' que hemos actualizado co el forEach anterior.
  let total=0;
  //Volvemos a recorrer con un 'foEach' los elementos almacenados en products ya actualizados sus subtotales en la variable 'products' esta vez para sumar los subtotales y almacenar el resultado en la variable 'total' que hemos creado.
  products.forEach(eachProduct => {
    total+=parseFloat(eachProduct.querySelector('.subtotal span').innerHTML);
  });
  //Seteamos (agregamos) el resultado de la suma de los products 
  document.querySelector('#total-value span').innerHTML=total;


  // ITERATION 3


  //... your code goes here
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
