// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity > input').value;

  let result = price * quantity

  product.querySelector('.subtotal span').innerText = result;
 

  // js/index.js



  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const price1 = document.getElementsByClassName('price')[0];
  const price2 = document.getElementsByClassName('price')[1];

  
  const quantity1 = document.getElementsByClassName('quantity')[0];
  const quantity2 = document.getElementsByClassName('quantity')[1];

  const finalPrice1 = price1.querySelector('span').innerText;
  const finalPrice2 = price2.querySelector('span').innerText;

  const finalQuantity1 = quantity1.querySelector('input').value;
  const finalQuantity2 = quantity2.querySelector('input').value;

  result1 = finalPrice1 * finalQuantity1;
  result2 = finalPrice2 * finalQuantity2;

  let subtotal1 = document.getElementsByClassName('subtotal')[0];
  let subtotal2 = document.getElementsByClassName('subtotal')[1];

  subtotal1.querySelector('span').innerText = result1;
  subtotal2.querySelector('span').innerText = result2;



  // ITERATION 3
  //... your code goes here

  let cartTotal = document.getElementById('total-value')
  cartTotal.querySelector('span').innerText = result1 + result2
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
