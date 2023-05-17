// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = document.querySelector('.price span');
  const priceVal = Number(price.innerText);
  const quantity = document.querySelector('.quantity input');
  const quantityVal = Number(quantity.value)
  const subtotalCalc = priceVal * quantityVal;
  const subtotal = document.querySelector('.subtotal span');
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
console.log(allRows[1])

updateSubtotal(allRows[1])

// allRows.forEach(updateSubtotal)

// for (let i = 0; i < allRows.length; i++) {
//   // let product = allRows[i];
//   // updateSubtotal(product);
//   // console.log(allRows.length)
//   // console.log(product)
// }


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
