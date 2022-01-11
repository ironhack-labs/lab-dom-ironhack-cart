// ITERATION 1

function updateSubtotal(product) {
//get price and quantity from DOM
const price = product.querySelector('.price span');
//make inner html value a number type
const priceAmount = Number(price.innerHTML);
//set quantity to the value attribute
const quantity = document.querySelector('.quantity input');
const quantityAmount = Number(quantity.value);
//get the object from DOM and store in a variable
const subTotal = product.querySelector('.subtotal span');
//calculate sub total price and store it in a variable
const subtotalAmount =priceAmount * quantityAmount;
subTotal.innerHTML = Number(subtotalAmount);

return subtotalAmount;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let allProducts = document.querySelectorAll('.product');
  let subTotals = 0;
  //for each product on the list, run updateSubtotal
  allProducts.forEach((singleProduct)=> {
    subTotals += updateSubtotal(singleProduct);
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
