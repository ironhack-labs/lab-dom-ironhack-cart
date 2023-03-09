// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!', product);

  
  //updateSubtotal(singleProduct);
  const price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input');
  let quantityValue = quantity.value;
  let subtotalPrice = price*quantityValue
  let subtotalIndicator = product.querySelector('.subtotal span');
  subtotalIndicator.innerText = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // updateSubtotal();

  // ITERATION 2
  const products = document.querySelectorAll('.product')
  const arrayOfPrices = []
  products.forEach(eachProduct => {
    arrayOfPrices.push(updateSubtotal(eachProduct))
  })


  // ITERATION 3
  //... your code goes here
let totalPrice = 0;
for (i=0; i<arrayOfPrices.length; i++){
  totalPrice += arrayOfPrices[i]
}
document.querySelector('#total-value span').innerText=totalPrice
}

// const totalPrice = 0;
// const products=document.querySelectorAll('.product')
// products.forEach(eachProduct => {
//   totalPrice += eachProduct.querySelector('.subtotal span'.innerText)
// })

// document.querySelector('#total-value span').innerText = totalPrice;


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
