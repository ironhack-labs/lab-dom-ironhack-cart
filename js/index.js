// ITERATION 1



function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let priceValue = price.innerHTML;
  let quantity = product.querySelector('.quantity input');
  let subtotal = quantity.value * price.innerHTML;

  let subtotalTag = product.querySelector('.subtotal span');
  subtotalTag.innerHTML = subtotal;
  return subtotal;
 
  console.log('Calculating subtotal, yey!');
}
 
    // ITERATION 2
   // code below

    // ITERATION 3
   // code below

function calculateAll() {

  let productRows = document.getElementsByClassName('product');
  let totalValue = 0;
  

   for(let i = 0; i < productRows.length; i++) {
    totalValue += updateSubtotal(productRows[i])
   }

   let allTogether = document.querySelector('#total-value span');
   allTogether.innerHTML = totalValue;

   // the above could also be:

   /*  for (let i of productsRow) { //i being each element of the array and products being the array itself 
    totalValue += updateSubtotal(i);

    let allTogether = document.querySelector('#total-value span').innerHTML = totalValue; // <- updates the total value for the user
  allTotal.innerHTML = totalValue;
   } */

  }


// BONUS - ITERATION 4 

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
