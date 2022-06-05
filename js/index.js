// ITERATION 1



function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const priceValue = Number(price.innerHTML)
  const quantity = product.querySelector('.quantity input')
  const quantityValue = Number(quantity.value)

  const subtotalPrice = priceValue * quantityValue
  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerHTML = subtotalPrice
  //console.log(`$${subtotalPrice}`)
  return subtotalPrice




  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  const getSubtotal = document.getElementsByClassName('product')
  const subtotalValue = function (productSubtotal) {
    let subtotalSum = 0
    for (let i = 0; i < productSubtotal.length; i++) {
      subtotalSum += updateSubtotal(productSubtotal[i])

    }
    return subtotalSum
  }
  const totalValue = document.querySelector('#total-value span')
  totalValue.innerHTML = subtotalValue(getSubtotal)



  // ITERATION 3
  //... your code goes here
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
