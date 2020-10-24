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

  console.log(precioFinal)

  const finalPrize = document.querySelector('#total-value span')

  console.log(finalPrize)

  finalPrize.innerHTML = precioFinal

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
