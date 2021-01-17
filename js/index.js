// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  const newSubtotal = price.innerHTML * quantity.value
  subtotal.innerHTML = newSubtotal

  return newSubtotal
  





  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  let calculateTotal = 0
  allProducts.forEach(object => calculateTotal += updateSubtotal(object))
  

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector('#total-value span')
  totalPrice.innerHTML = calculateTotal

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
