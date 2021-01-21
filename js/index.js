// ITERATION 1

  //... your code goes here
  function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subTotal = price.innerHTML * quantity.value
  console.log(subTotal)
  let subt = product.querySelector('.subtotal')
  subt.innerHTML = `$ ${subTotal}`
  return subTotal
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of testement

  // ITERATION 2
  //... your code goes here
  const moreProducts = document.querySelectorAll('.product')
  let totalPrice = 0
  moreProducts.forEach((products) => {
    totalPrice += updateSubtotal(products)
  })


  // ITERATION 3
  //... your code goes here
  /*
  let allProductsTotal = 0
  let totalProducts = document.querySelector('#total-value span')
  totalProducts.innerHTML = allProductsTotal
  */
 let allProductsPrices = document.querySelector('#total-value span')
  allProductsPrices = totalPrice
  console.log(totalPrice)
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
