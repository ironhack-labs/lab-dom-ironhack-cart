// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //STEP 1 & 2 almacenar precio y cantidad
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value

  //STEP 3 calcular subtotal
  const subtotalProduct = price * quantity

  //STEP 4 almacenar(mostrar) subtotal
  const subtotalPush = product.querySelector('.subtotal span')

  //STEP 5 pintar el subtotal en el html
  subtotalPush.innerHTML = subtotalProduct
  return subtotalProduct

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //almacenar todas las clases productos
  const someProducts = document.querySelectorAll('.product')
  //
  let total = 0
  //hacer recorrido por la clase producto, haciendo una llamada a la funcion updateSubtotal
  someProducts.forEach(elm => {
     total += updateSubtotal(elm)
})

  //... your code goes here

  // ITERATION 3 pintar sobre el total en el html
  document.querySelector('#total-value span').innerHTML = total
  
  //... your code goes here
} 

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const buttonRemove = document.querySelectorAll('.btn-remove')
  buttonRemove.forEach(function (elm) {
    elm.onclick = function () {
        document.querySelector('tbody').removeChild('.product')
    }
})
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttonRemove = document.querySelectorAll('.btn-remove')
  buttonRemove.forEach(function(elm){
    elm.addEventListener('click', removeProduct)
  })
  //... your code goes here
});
