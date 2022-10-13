// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
let price = product.querySelector('.price span')
let quantity = product.querySelector('.quantity input')
const priceVal = price.innerHTML
let quaVal = quantity.value
let subtotal = priceVal * quaVal
product.querySelector('.subtotal span').innerHTML = subtotal
return (subtotal)

}

function calculateAll() {


  // ITERATION 2

let allPro = document.getElementsByClassName('product')
let emptyArr = 0
for (i = 0; i < allPro.length; i++)
emptyArr += updateSubtotal(allPro[i])

// ITERATION 3

let todoVal = document.querySelector('#total-value').lastChild
return todoVal.innerHTML = emptyArr


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
