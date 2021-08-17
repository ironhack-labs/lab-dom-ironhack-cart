// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  //... your code goes here

 let priceValue = price.innerText

 let quantityValue = quantity.value

 let subtotalPrice = priceValue * quantityValue

 let priceSubtotal = product.querySelector('.subtotal span') 

 priceSubtotal.innerText = subtotalPrice


 return subtotalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.


  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2


  let allProducts = document.querySelectorAll('table#cart .product')
  let sumProductsValue = 0

  for (let i = 0; i < allProducts.length; i++) {
   sumProductsValue += updateSubtotal(allProducts[i])



  }


  // ITERATION 3
  //return updateSubtotal(allProducts)
  let totalPrice = document.querySelector('#total-value span' )
  console.log(totalPrice)
  totalPrice.innerText = sumProductsValue

  return sumProductsValue

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