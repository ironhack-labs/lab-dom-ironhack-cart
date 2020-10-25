// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceProduct = parseFloat(price.innerHTML)
  const quantityFinal = quantity.value

  let priceFinal = priceProduct * quantityFinal

  let subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = priceFinal

  return subTotal
}


function calculateAll() {

  const twoProducts = document.querySelectorAll('.product')

  twoProducts.forEach(function (newTotal) {

    updateSubtotal(newTotal)

  })

  const finalSubtotal = document.querySelectorAll('.subtotal span')

  let precioFinal = 0

  finalSubtotal.forEach(function (totalSubtotal) {

    precioFinal += parseFloat(totalSubtotal.innerHTML)
    return precioFinal

  })

  const finalPrize = document.querySelector('#total-value span')

  finalPrize.innerHTML = precioFinal

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target); 
  
  let deleteName = document.querySelector('.name')
  document.querySelector('.product').removeChild(deleteName)
  let deleteQuantity = document.querySelector('.quantity')
  document.querySelector('.product').removeChild(deleteQuantity)
  let deletePrice = document.querySelector('.price')
  document.querySelector('.product').removeChild(deletePrice)
  let deleteSubtotal = document.querySelector('.subtotal')
  document.querySelector('.product').removeChild(deleteSubtotal)
  let deleteButon = document.querySelector('.action')
  document.querySelector('.product').removeChild(deleteButon)
  
}







// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  const selectBoton = document.querySelectorAll('.action button')
  selectBoton.forEach(function (deleteboton) {
    deleteboton.addEventListener('click', removeProduct);
  })
})