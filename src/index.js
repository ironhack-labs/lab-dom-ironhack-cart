// ITERATION 1

/*Step 1: Inside updateSubtotal(), create two variables
(we suggest naming them price and quantity)*/

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;

  console.log(price);

  const quantity = product.querySelector('.quantity input').value;

  console.log(quantity);

  console.log('Calculating subtotal, yey!');

  
  /*Step 3: Use the values you extracted from the above-mentioned
  DOM elements to calculate the subtotal price.
  You can create a new variable, and its value will be equal
  to the product of these values.
  Ex. If a user picked 3 Ironhack Rubber Ducks,
  they should see that the subtotal is 75 dollars ($25 * 3 = $75). */

  //... your code goes here

  let subtotal = quantity * price
  let newSubtotal = product.querySelector('.subtotal span');
  newSubtotal.innerText = subtotal;
  return subtotal;
}

/* Now, when you are becoming a DOM manipulation ninja,
use your skills once again to get the DOM element
that should hold the subtotal.
Hint: it is the element with the class subtotal. */

function calculateAll() {

  // ITERATION 2
  //... your code goes here

let products = document.querySelectorAll('.product')
 
let totalValue = 0;
console.log(products);
products.forEach(product => totalValue += updateSubtotal(product))
console.log(totalValue);

  // ITERATION 3

let grandTotal = document.querySelector('#total-value span'); 
grandTotal.innerText = totalValue;
console.log(grandTotal);
return totalValue;

/*  newSubtotal.innerText = subtotal;
  return subtotal; */

/*function calculateAll() {
    let total = 0;
    let allProducts = document.querySelectorAll('.product')
      allProducts.forEach(product => {
    total += updateSubtotal(product)
      })
    let displayTotal = document.querySelector('#total-value span')
    displayTotal.innerText = total
    return total
   } */
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
