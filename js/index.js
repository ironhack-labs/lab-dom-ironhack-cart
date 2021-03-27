// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  
  const priceValue = price.innerHTML
  let quantityValue = quantity.value 
  
  let subtotal = priceValue * quantityValue
  
  let subtotalElement = product.querySelector('.subtotal span') 

  subtotalElement.innerHTML = subtotal

  //... your code goes here
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

 // ITERATION 2
  let allProducts = document.querySelectorAll('.product').forEach(product => {
    updateSubtotal (product);
    
  });
  
  // ITERATION 3
  //... your code goes here

  let sumTotals = document.querySelectorAll('.subtotal')

  console.log(sumTotals[0]);

  sumTotals = product.querySelector('#total-value span')
  
  sumTotals.innerHTML = 
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
