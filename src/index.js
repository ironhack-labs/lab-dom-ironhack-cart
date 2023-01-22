// ITERATION 1

function updateSubtotal(product) {

  // console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value


  const subtotalPrice = product.querySelector('.subtotal span')
  subtotalPrice.innerText = price * quantity

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProduct = document.querySelectorAll('.product')
  for (let i = 0; i < multipleProduct.length; i++) {
    singleProduct = multipleProduct[i]
    updateSubtotal(singleProduct)
  }
  //Este bucle es el bueno. Recorre el Array del producto y le pides que le aplique la función de calculo a cada uno de los productos



  //   PRIMER INTENTO Iter2  const multiplePrice = document.querySelectorAll('.price span') //esto si servia pero con return
  //     const multipleQuantity = document.querySelectorAll('.quantity input') //esto si servia pero con return
  //     const subtotalForAll = document.querySelectorAll('.subtotal span') //esto si servia pero con return
  //     for (let i = 0; i < subtotalForAll.length; i++) {
  //       subtotalForAll[i].innerText = multiplePrice[i].innerText * multipleQuantity[i].value
  // }
  //   return subtotalForAll //al incluir un return no puedo continuar esto si servia pero con return FINAL PRIMER INTENTO.


  // DESDE AQUI SEGUNDO INTENTO Iter3 for (let j = 0; j < multipleSubtotal.length; j++) {
  //   let singleSubtotal = multipleSubtotal[j]
  // } HASTA AQUI...PURRIA DEL SEGUNDO INTENTO NO NECESITAS OTRO BUCLE SI CON EL PRIMERO YA SELECCIONAS EL PRODUCTO!!!

  // ITERATION 3
  //... your code goes here

  const numberPrice = document.querySelectorAll('.subtotal span')
  console.log(numberPrice)
  let finalPrice = 0
  for (let j = 0; j < numberPrice.length; j++) {
    finalPrice += Number(numberPrice[j].innerText) /*Recordar que en este caso había que detallar innertext. 
    La Variable Price puede ir dentro o fuera del bucle. Preguntar que es mejor */

    const totalPrice = document.querySelector('#total-value span')
    totalPrice.innerText = finalPrice
  }
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
