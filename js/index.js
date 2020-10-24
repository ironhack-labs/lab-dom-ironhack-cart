// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText)
  const quantity = Number(product.querySelector('.quantity input').value)

  const calculateSubtotal = (price * quantity)
  
  const singleSubtotal = product.querySelector('.subtotal span')
  singleSubtotal.innerText = calculateSubtotal
  
  return calculateSubtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product')
  products.forEach(function (index) {
   updateSubtotal(index)
  })

  // ITERATION 3
  let subtotalArray = []
  subtotalArray.push(subtotal)
  // sumTotal += calculateSubtotal


  const total = document.querySelector('#total-value span')
  // total.innerText = sumTotal

  console.log(calculateSubtotal)
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
