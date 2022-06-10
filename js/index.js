// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  // console.log(product)//.querySelector('.price span').innerText)
  //... your code goes here
  const price = product.querySelector('.price span')
  // console.log(price)
  const quantity = product.querySelector('.quantity input')
  // console.log(quantity.value)
  const subtotal = product.querySelector('.subtotal span')
  // console.log(subtotal)
  subtotal.innerHTML = price.innerHTML * quantity.value
  // NICEEE
  const total = product.querySelector('#total-value span')
  // console.log(total)

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  const allSubs = document.querySelector('.subtotal span')
  
  // console.log(singleProduct)
  // end of test

  // ITERATION 2 ///////////////////////////////////////////////////////////////////////
  
  ///NOT WORKING
  // let total = 0;
  //   const products = document.getElementsByClassName('product')
  //   for (let i = 0; i < products.length; i++) { 
  //     // updateSubtotal(singleProduct[i])
  //     // let toInt = parseInt(allSubs[i].innerHTML)
  //     // total = total + toInt
  //     console.log(products)
  // }

  // ITERATION 3



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
