// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML; // something inside of the product and span 
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const subTotalPrice = +price * quantity;
  const subTotal = product.querySelector('.subtotal span')
  subTotal.innerHTML = subTotalPrice; 
  return subTotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // call the function updateSubtotal with every tr.product DOM node in the table#cart

  const productsCollection = document.getElementsByClassName('product');
  const productsList = [...productsCollection]
  let total = 0;
  for (let i=0; i< productsList.length; i+= 1) {
    total += updateSubtotal(productsList[i])
  }


  // ITERATION 3
  const totalElm = document.querySelector('#total-value span');
  totalElm.innerText = total;
  
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

// In this step, our goal is to help you understand the provided code in the js/index.js. 
//Thanks to the provided code, the Calculate Prices button already has some functionality. 
//Using the DOM manipulation, we got the element with the id="calculate" 
//and added an event listener click to it. 
//When clicked, this button will fire the calculateAll() function. 

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
