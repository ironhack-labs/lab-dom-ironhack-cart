// ITERATION 1

function updateSubtotal(product) {
  
  const priceElement = product.querySelector(".price span");  // accedo al elemento precio en el HTML.
  const price = Number(priceElement.innerText);  // accedo al contenido del elemento precio y lo convierto en un número pq la consola indica que originalmente es un string.

  const quantityElement = product.querySelector(".quantity input");  // accedo al elemento quantity en el HTML.
  const quantity = Number(quantityElement.value);  // accedo al value del elemento quantity (ya que es un input) y lo convierto en un número pq la consola indica que originalmente es un string.

  const subtotal = price * quantity;  // creo una constante subtotal que es el resultado de multiplicar el número guardado en precio y el número guardado en quantity.
  const subtotalElement = product.querySelector(".subtotal span");  // accedo al elemento Subtotal en el HTML.
  subtotalElement.innerHTML = subtotal;  // indico que el contenido que quiero que tenga el elemento Subtotal sea la constante subtotal que hemos declarado antes.

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
  totalElement.innerText = totalPrice;  // indico que el contenido que tiene el elemento del total sea la variable totalPrice.
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
