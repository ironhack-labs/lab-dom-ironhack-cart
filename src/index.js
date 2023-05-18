// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span");
  const contentPrice = Number(price.innerText);
  console.log(contentPrice);

  const quantity = product.querySelector(".quantity input");
  const contentQuantity = Number(quantity.value);
  //.value property to get the value entered by the user
  console.log(contentQuantity);

  let multiplied = contentPrice * contentQuantity;
  console.log(multiplied)

  
  const subtotalVar = product.querySelector(".subtotal span");
  subtotalVar.innerText = multiplied; 
  
  ////innerText work for numbers and strings, textContent works for strings only?


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /////const singleProduct = document.querySelector('.product');
  /////updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  console.log('Trying to calculate all....');

  const price = document.querySelector(".price span");
  const contentPrice = Number(price.innerText);
  console.log(contentPrice);

  const productOne = document.createElement()
  
 
  const products = document.getElementsByClassName(".product");
  const productPrices = Number(price.innerText);

  // I AM LOST:(((((


 
  

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
