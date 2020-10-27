// ITERATION 1
let totalPrices = []

function updateSubtotal(product) {

  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')

  const priceValue = price.innerHTML
  const quantityValue = quantity.value

  const subtotal = priceValue * quantityValue

  let subtotalElement = product.querySelector('.subtotal span')

  subtotalElement.innerHTML = subtotal

  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const twoProducts = document.getElementsByClassName('product')
  const twoProductsArr = [...twoProducts]
  const arrSum = twoProductsArr.forEach((product)=>{
    updateSubtotal(product)
  })

  
  // ITERATION 3
  const total = document.querySelector('#total-value span')

  const subtotals = document.querySelectorAll('.subtotal span')
  const totalsArr = [...subtotals]

  let sum = 0
  totalsArr.forEach((product)=>{
    sum += Number(product.innerHTML)
  })

  total.innerHTML = sum
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
