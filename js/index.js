// ITERATION 1

function updateSubtotal(product) {
//get price and quantity from DOM
const price = product.querySelector('.price span').innerHTML;
//set quantity to the value attribute
let quantity = document.querySelector('.quantity input').value;
//calculate sub total price and store it in a variable
let subTotal = quantity * price;
//show the subtotal: get the object from DOM and set new value
product.querySelector('.subtotal span').innerHTML = subTotal;
console.log(subTotal);
return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let allProducts = document.querySelectorAll('.product');
  console.log(allProducts);
  //let total = 0;
  //for each product on the list, run updateSubtotal
  for (const product of allProducts) {
    updateSubtotal(product);
  }

  



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
