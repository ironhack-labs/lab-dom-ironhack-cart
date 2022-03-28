// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  subtotalValue = price.innerHTML * quantity.value
  subtotal.innerHTML = subtotalValue
  return subtotalValue

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product')
  const total = document.querySelector('#total-value span')
  let totalSum=0
  allProducts.forEach(eachProduct=> {
  updateSubtotal(eachProduct)
  totalSum+=updateSubtotal(eachProduct)
  });
  total.innerHTML = totalSum
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  target.parentNode.parentNode.remove(target)
  
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)
  const removeProductsBtn = document.querySelectorAll('.btn-remove')
  removeProductsBtn.forEach(eachRPB => {
  eachRPB.addEventListener('click',removeProduct)
  });
  //... your code goes here
});
