// ITERATION 1

function updateSubtotal(product) {
const price = document.querySelector('.price span');
//returns <span>25.00</span>
const quantity = document.querySelector('.quantity input');
//the input tag inside quantity class in .product

let extractedPrice = price.innerHTML;
//25.00
let extractedQuantity = quantity.value;
//0
let calculateSubtotal = extractedPrice * extractedQuantity;
//new variable containing the result of the multiplication expression
let subtotalValue = document.querySelector('.subtotal span');
//the subtotal class inside each product
subtotalValue.innerHTML = calculateSubtotal;
//assigning calculateSubtotal to be the value inside Subtotal
extractedSubtotal = subtotalValue.innerHTML;
//JUST the number inside of the subtotal span
}

//THIS HAPPENS FIRST//
function calculateAll() {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    updateSubtotal(product);
  });
  

  /*const arrayOfProducts = [...document.getElementsByClassName('.subtotal')];
  arrayOfProducts.forEach(product => {
    updateSubtotal(product);
  });
  */
  
  /*using a for loop instead of forEach if I don't transform the HTML
  collection into an array - don't have the right syntax here either
  for(let i = 0; i < allProducts.length; i++) {
    updateSubtotal(products[i]);
  }*/
  
  // ITERATION 4
  let totalValue = document.querySelector('#total-value span');
  for(let i = 0; i < products.length; i ++) {
    totalValue += extractedSubtotal[i];
  }
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
