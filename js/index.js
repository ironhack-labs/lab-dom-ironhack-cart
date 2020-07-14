// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  let priceTotal = Number(price.innerHTML);
  console.log(priceTotal)

  const quantity = product.querySelector('.quantity input');
  let quantityAmount = Number(quantity.value);
  console.log(quantityAmount)

  let calculation = priceTotal * quantityAmount
  console.log(calculation)

  const subTotal = product.querySelector(".subtotal")
  subTotal.textContent = calculation + "$";


  return subTotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 && ITERATION 3

const allProducts = document.querySelectorAll('.product')
const totalValue = document.querySelector('#total-value span')
let totalPrice = 0;

allProducts.forEach(function(product) {
  let result = updateSubtotal(product)
  totalPrice = totalPrice + result
})
 return totalPrice

 const total = product.querySelector("#total-value")
 total.textContent = totalPrice + "$"
 
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
