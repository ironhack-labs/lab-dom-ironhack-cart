// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //Step 1 y 2
  const price = product.querySelector('.price span').innerHTML

  const quantity = product.querySelector('.quantity input').value

  //Step 3

  const TotPrice = price * quantity

  //Step 4 

  const subtotal = product.querySelector('.subtotal span')

  //Step 5

  subtotal.innerHTML = TotPrice

  return TotPrice

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let allProducts = document.querySelectorAll('.product')

  let inicialTot = 0

  allProducts.forEach(function (elem) {
    inicialTot += updateSubtotal(elem)
  })

  //... your code goes here

  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = inicialTot

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  target.parentNode.remove()
  
  calculateAll ()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here 
  const nProdBtn = document.querySelector('.btn')
  nProdBtn.forEach(function (elem) {
    elem.addEventListener('click', createProduct)
  })

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  const delBtn = document.querySelectorAll('.action')


  delBtn.forEach(function (elem) {
    elem.addEventListener('click', removeProduct)
  })

});