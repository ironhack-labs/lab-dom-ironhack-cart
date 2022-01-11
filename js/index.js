// ITERATION 1

function updateSubtotal(product) {
//if using the word 'product' we need to say 'product' before the 'querySelector'
//document won't work
//get price and quantity from DOM
const price = product.querySelector('.price span');
const priceAmount = price.innerHTML;
const quantity = product.querySelector('.quantity input');
const quantityAmount = quantity.value;

//calculate sub total price and store it in a variable
const subTotalAmount = priceAmount * quantityAmount;
//get the subtotal object from DOM and store in a variable
const subTotal = product.querySelector('.subtotal span');
subTotal.innerHTML = subTotalAmount;

console.log(subTotalAmount);
return subTotalAmount;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let allProducts = document.querySelectorAll('.product');
  let subTotals = 0;
  //for each product on the list, run updateSubtotal
  [...allProducts].forEach((eachProduct)=> {
    subTotals += updateSubtotal(eachProduct);
    console.log(eachProduct);
  });
  
    //total = total + subTotal;

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
