// ITERATION 1

// const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText =  Number(price.innerText)*quantity.value






  

  

  

  //... your code goes here
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  
  Array.from(document.getElementsByClassName("product")).map(function (elem){
    
   updateSubtotal(elem)
    
  })

  let totalAmount = 0 

  Array.from(document.querySelectorAll('.subtotal span')).map(function (num){
  
   totalAmount += Number(num.innerText)
   })

   document.querySelector('#total-value span').innerText = totalAmount

 
      


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
