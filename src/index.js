// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const priceVal = Number(price.innerText);
  const quantity = product.querySelector('.quantity input');
  const quantityVal = Number(quantity.value)
  const subtotalCalc = priceVal * quantityVal;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalCalc
  return subtotal.innerText;
  }
 
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
const allRows = document.querySelectorAll('.product')
console.log(allRows)

let total = 0

allRows.forEach((product) => {
  const result = updateSubtotal(product);
  total += Number(result)
})

  // ITERATION 3

const showTotalValue = document.querySelector('#total-value');
showTotalValue.innerText = `$${total}`;


// Tried that one below but it didn't worked:

// let allSubtotals = document.querySelectorAll('.product .subtotal')
// console.log(allSubtotals)


// allSubtotals.reduce((acc, subtotal) =>{
//   console.log(subtotal.innerText)
//   console.log(acc)
//   // acc + Number(subtotal.innerText);

// },0);

  // return totalPrice
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
