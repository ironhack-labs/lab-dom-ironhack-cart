// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').textContent
  const quantity = product.querySelector('.quantity input').value
  const subtotal = product.querySelector('.subtotal span')
  let result = price * quantity

  subtotal.innerHTML = result.toFixed(2)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product')
  allProducts.forEach(function (allSubtotals) {
    updateSubtotal(allSubtotals)

  })//Gracias a Salva y Carolina por aclarar la idea de querySelectorAll y recordar el concepto de reutilizacion de codigo.

  // ITERATION 3
  //... your code goes here

  const allSubtotals = document.querySelectorAll('.subtotal span')

  let finalTotal = 0
  allSubtotals.forEach(function (subtotal) {

    finalTotal += parseFloat(subtotal.textContent)

  })

  const total = document.querySelector('#total-value span')
  total.innerHTML = finalTotal.toFixed(2)

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
