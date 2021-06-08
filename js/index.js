// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  
  let priceVal = Number(price.innerText)
  let quantityVal = Number(quantity.value)
  
  let subtotalPrice = priceVal * quantityVal
  let subtotal = product.querySelector(".subtotal span")
  subtotal.innerText = subtotalPrice
  return subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  let sumTotal = 0;

  // ITERATION 2
  let products = document.querySelectorAll("tr.product")
  products.forEach((product) => {
    sumTotal += updateSubtotal(product)
  })
  

  // ITERATION 3
  let total = document.querySelector("#total-value span")
  total.innerText = sumTotal
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let tr = target.parentNode.parentNode;

  tr.parentNode.removeChild(tr);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn-remove')
  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      removeProduct(event)
      calculateAll()
    })
  })
});
