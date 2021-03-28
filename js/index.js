// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector ('.price span');                  //1. para obtener elementos del DOM que tienen precio
  const quantity = product.querySelector ('.quantity input');           //1. para obtener elementos del DOM que tienen cantidad

  // console.log('iteration 1')

  let priceValue = Number (price.innerHTML)                             //2. para calcular el precio dandole valor numerico
  let quantityValue = Number (quantity.value)                           //2. para calcular la cantidad denproductos

  let subtotal = priceValue * quantityValue                              //3. calcular el precio total por lo selecccionado
   
  // console.log('iteration 1')

  let finalPrice = product.querySelector ('.subtotal span')              //4. para obterner elemento del DOM que contiene el subtotal


  finalPrice.innerHTML = subtotal                                        // 5. para mostrar el precio total 
  return subtotal 


 // console.log('final iteration 1')

}



// -------------------------------0--------------------------------- //



// ITERATION 2

  function calculateAll() {
  
  //let newProduct = document.getElementsByClassName ('product')

  let totalPrice = 0                                                      // 1. la variable
  
  let newProduct = document.querySelectorAll('.product')                  // 2. para obtener el objeto de esa clase .product del DOM
 
  //console.log('iteracion 2')

  newProduct.forEach(function (theProduct) {
  totalPrice += updateSubtotal(theProduct)})                               // 3. forEach function que recorre el objeto

    
  //console.log ('end of iteration 2')



// -------------------------------0--------------------------------- // 



  // ITERATION 3
 

let totalValue = document.querySelector ('#total-value span')            // 1. para actualizar el precio total

totalValue.innerHTML = totalPrice                                        // 2. para mostrar el total

//console.log('end of iteratior 3')

}


// -------------------------------0--------------------------------- // 


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
