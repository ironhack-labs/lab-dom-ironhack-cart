// ITERATION 1


function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  
  let price = document.querySelector('.price span')
  let quantity = document.querySelector('.quantity input')
  let firstProduct = document.querySelector('.subtotal')
  let priceVal = price.innerHTML
  let quantityVal = quantity.value
  let subtotalVal = priceVal * quantityVal
  firstProduct.innerHTML = subtotalVal
  console.log(subtotalVal)
  return subtotalVal
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let subtotal = document.querySelectorAll('.product')
  subtotal.forEach(elem => {
    // elem.innerHTML = 
    elem.innerHTML = updateSubtotal(subtotal)
  })

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
