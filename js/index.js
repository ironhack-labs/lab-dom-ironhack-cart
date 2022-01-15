// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  // console.log(price)
  const quantity = product.querySelector('.quantity input')
  // const quantityValue = quantity.value
  // console.log(quantityValue)
  // price.innerText = '50'

  // console.log(quantityValue)

  const subtotalPrice = product.querySelector('.subtotal span')
  const subtotalPriceValue = price.innerText * quantity.value
  // console.log(subtotalPrice)

  subtotalPrice.innerText = subtotalPriceValue
  return subtotalPriceValue


}








function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  //... your code goes here
  const multipleProducts = document.getElementsByClassName('product')
  let totalPrice = 0

  for (let i = 0; i < multipleProducts.length; i++) {
    updateSubtotal(multipleProducts[i])
    totalPrice += updateSubtotal(multipleProducts[i])
  }


  // // ITERATION 3
  // //... your code goes here id='total-value'
  // const totalPrice = document.querySelector('#total-value span').innerText
  // console.log(totalPrice)
  document.querySelector('#total-value span').innerText = totalPrice

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


