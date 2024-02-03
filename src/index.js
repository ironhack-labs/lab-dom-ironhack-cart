// ITERATION 1
function updateSubtotal(product) {
  //  console.log('Calculating subtotal, yey!');
  
 /* const price = product.querySelector('.price span').innerText;
  // is this use of .innerWHATEVS correct?

  let quantity = document.querySelector('.quantity input').value;

  let subtotal = price * quantity

  console.log(subtotal)

  product.querySelector('.subtotal span').innerHTML = subtotal

  return subtotal
  
/*  let subtotal = product.querySelector('.subtotal span')

  subtotal.innerHTML = subtotalCalculation */

  const price = product.querySelector('.price span');

  const priceValue = price.innerText;

  let quantity = product.querySelector('.quantity input');

  let quantityValue = quantity.value;

  let subtotal = product.querySelector('.subtotal span')

  let subtotalValue = priceValue * quantityValue
  
  subtotal.innerText = subtotalValue

  return subtotalValue
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

/* let products = [...document.getElementsByClassName("product")];

products.forEach(function(product){
const price = product.querySelector('.price span').innerText;
console.log(price)
})

let quantity = document.querySelectorAll('.quantity input');

quantity.forEach(input => {
  console.log(input.value)
}) */


// ITERATION 3
const product = document.querySelectorAll(".product")

let total = 0

for (let i = 0; i < product.length; i++) {
  let singleProduct = product[i]
//  console.log(updateSubtotal(singleProduct))
  total = total + updateSubtotal(singleProduct)
}

//console.log(total)
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
