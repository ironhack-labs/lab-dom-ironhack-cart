// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let priceValue = price.innerHTML
  let quantityValue = quantity.value
  const subTotal = priceValue * quantityValue
 const sumTotal = product.querySelector('.subtotal span')
 console.log(sumTotal)
 sumTotal.innerHTML = subTotal
 return subTotal
}
function calculateAll() {
  //const singleProduct = document.querySelector('.product[');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
const productList = document.getElementsByClassName('product')
let sum = 0
for (let i = 0; i<productList.length; i++){
  updateSubtotal(productList[i])
  sum += updateSubtotal(productList[i])
}
const totalF = document.querySelector('#total-value span')
totalF.innerText = sum
  // ITERATION 3
  //... your code goes here
// ITERATION 4
}
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
})
