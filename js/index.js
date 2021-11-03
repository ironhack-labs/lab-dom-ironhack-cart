// ITERATION 1

const { ConnectionEmittedEvents } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const quantity = product.querySelector('.quantity input').innerHTML;
  const price = product.querySelector('.price span').innerHTML;

  const quantityValue = quantity.innerHTML;
  const priceValue = price.innerHTML;

  const calcSubtotal = quantityValue * priceValue;

  const displaySubTotal = product.querySelector('.subtotal span');

  displaySubTotal.innerHTML = calcSubtotal;

  return calcSubtotal;
  

}


function calculateAll() {
  
  // ITERATION 2
  const productsTotality = document.getElementsByClassName('.product')
  
  return updateSubtotal(productsTotality);

 


  // ITERATION 3
  //... your code goes here


  const totalPrice = document.querySelector(' #total-value span')

  let totalPrice = 0;
  for(let i = 0; i < productsTotality.length){
    
    return 
  }
  

}











// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  //... your code goes here
  const $removeButton = document.querySelectorAll('.btn btn-remove');
  removeButton.addEventListener('click, removeProduct()'); 

  for(){

  }

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
