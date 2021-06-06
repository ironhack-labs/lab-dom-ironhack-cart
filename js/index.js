// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  // const price = product.querySelector('.price span')
  //  const quantity = product.querySelector('.quantity input')
  const inputValue = document.querySelector('.quantity input').value
  const textPrice = document.querySelector('.price span').innerHTML

  const result = inputValue * textPrice

  const domSubtotal = document.querySelector('.subtotal span')

  domSubtotal.innerHTML = result

  console.log(domSubtotal)




}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  let total = 0
  const allProduct = document.querySelectorAll('.product')

  allProduct.forEach(element => {
    total += updateSubtotal()


  });

  // muchas horas le he dedicado a este, no consigo establecer correctamente la relación de los resultados con sus outputs en pantalla o ese creo que es mi caso, los apuntes de memoria pero no se aplicarlos. *******
  // const allTr = document.getElementsByClassName('.product')





};
// // EL PROCESO LO HE HACABADO ENTENDIENDO.
// Pero la realidad es que sin saber escribir correctamente la linea 37 pero intentandolo, en una de esas he tabulado sin querer y se me ha escrito la funcion flecha, me he informado y  la he rellenado como creía y ha funcionado solo para la primera lei
// let total = 0
// const allTr = document.getElementsByClassName('.product'){ }
// console.log(`existe`, { allProduct })

// allTr.forEach(function (product) {
//   const allPrice = document.querySelectorAll('.price span').innerHTML
//   const allValue = document.querySelector('.quality input').value
//   const allSubtotal = allPrice * allValue
//   total += updateSubtotal(product)
//   allSubtotal = allTr.querySelectorAll('.subtotal span').innerHTML


//   total += allSubtotal

// }
//   const total-vaule = document.getElementById('total-value')
//   poner el valor de totaltotal en la etiqueta del html
// ITERATION 3
//... your code goes here


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
