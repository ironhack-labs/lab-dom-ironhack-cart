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
 console.log(products)

  //Recorremos el DOM con el loop 'forEach' para volver a ejecutar la funcion anterior 'updateSubtotal' y actualizar el 'subtotal' en todos los elementos 'product' que hemos recogido en la variable 'Products'. 
  products.forEach(eachProduct => {
    updateSubtotal(eachProduct);
  });



  //... your code goes here
  // Creamos una variable a cero llamada 'total' donde almacenaremos la suma de los 'subtotales' que hemos actualizado co el forEach anterior.
  let total=0;
  //Volvemos a recorrer con un 'foEach' los elementos almacenados en products ya actualizados sus subtotales en la variable 'products' esta vez para sumar los subtotales y almacenar el resultado en la variable 'total' que hemos creado.
  products.forEach(eachProduct => {
    total += parseFloat(eachProduct.querySelector('.subtotal span').innerHTML);
  });
  //Seteamos (agregamos) el resultado de la suma de los products 
  document.querySelector('#total-value span').innerHTML=total;


  // ITERATION 3


  //... your code goes here
}

// ITERATION 4

function removeProduct(event) { 
  //console.log('estoy aqui'); 
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  
  //... your code goes here
  //4.3 Usamos target para reconocer en que btnRemove tenemos el click y borramos el producto completo
  target.closest(".product").remove();

  //4.4 Volvemos a llamar a la funcion calculate all para actualizar el total de los productos  
  calculateAll();

}

// ITERATION 5

function createProduct() {
  console.log('vamos a crear un producto nuevo');
  //... your code goes here
  //5.1 Clonamos el contenedor Products dentro del tbody
  let product = document.querySelector('.product'); 
  let clon = product.cloneNode(true);
  let tbody = document.querySelector('tbody'); 
  console.log(tbody);
  tbody.appendChild(clon);
  //5.2 Obtenemos los datos del nuevo producto nombre y lo agregamos al nuevo producto
  
  let newProductName = document.querySelector('.create-product input').value;
  let newProductElement = document.querySelectorAll('.product .name');
  let lastElement = newProductElement[newProductElement.length- 1];
  lastElement.innerHTML = newProductName;
  //5.2 Obtenemos los datos del nuevo producto precio y lo agregamos al nuevo producto
  const price = product.querySelector('.price span');
  let newProductPrice = document.querySelectorAll('.create-product input')[1].value;
  let newProductElementPrice = document.querySelectorAll('.product .price span');
  let lastElementPrice = newProductElementPrice[newProductElementPrice.length- 1];
  lastElementPrice.innerHTML = newProductPrice;
  console.log(lastElementPrice);
  //5.2 acemos un reset de los inputs de create product
  document.querySelector('.create-product input').value = "";
  document.querySelectorAll('.create-product input')[1].value = 0;
  
  //5.3 volvemos hacer un forEach para capturar los botonesRemove del nuevo elemento
  let botonesRemove = document.querySelectorAll('.product .btn-remove');
  botonesRemove.forEach(eachBtnRemove => {
    //Agregamos 'listener' para escuchar un click en cualquiera de los botones 'remove'
    eachBtnRemove.addEventListener("click", removeProduct);
    
  });
  //console.log('botonesRemove');


  //5.10 Volvemos a llamar a la funcion calculate all para actualizar el total de los productos 
  calculateAll();
  
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //4.1 creamos una variable 'botonesRemove' donde almacenar todos nuestros botones 'remove' y con comprovamos que captura todo los botones remove del DOM Con un console.log
  let botonesRemove = document.querySelectorAll('.product .btn-remove');
  //console.log(botonesRemove);
  //4.2 Con el loop for each recoremos todoas estos botones remove a la espear de un click con el metodo 'addEventListener' una vez ha hecho click se dispara la funcion 'removeProduct'
  botonesRemove.forEach(eachBtnRemove => {
    //Agregamos 'listener' para escuchar un click en cualquiera de los botones 'remove'
    eachBtnRemove.addEventListener("click", removeProduct);
    
  });
 

  //... your code goes here
  //creamos una variable 'createProduct' donde almacenar el boton 'createProduct'
  const cloneProduct = document.getElementById('create');
  //Comprovamos que captura todo los botones remove del DOM Con un console.log
  //console.log(createProduct);
  cloneProduct.addEventListener('click', createProduct);
  

});
