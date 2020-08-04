// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price=product.querySelector('.price span');
  let quantity=product.querySelector('.quantity input');
  
  let priceElem= parseFloat(price.innerText); 
  let quantityElem = quantity.valueAsNumber;

  subtotalElem = priceElem * quantityElem;

  let subtotal=product.querySelector('.subtotal span')

  subtotal.innerText = subtotalElem;

  return subtotalElem;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const items = document.querySelectorAll('.product');

  let total=0; 
  

  for (let i=0; i<items.length; i++) {
    total += updateSubtotal(items[i]);
  }

  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = total;
  
  /* let totalElem = document.querySelector('#total-value span');
  totalElem.innerHTML = total;
  return totalElem; */
}

// const totalValue = document.querySelector('h2 span')

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
