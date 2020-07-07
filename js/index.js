// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span');
  let qty = product.querySelector('.quantity input');
  let priceValue = parseInt(price.innerHTML);
  let qtyValue = parseInt(qty.value);
  let subtotal = parseInt(priceValue * qtyValue);
  let sbtDom = product.querySelector('.subtotal span');

  sbtDom.innerHTML = subtotal;

  /*  console.log(priceValue);
   console.log(subtotal);
   console.log(typeof subtotal);
   console.log(qtyValue); */

  return subtotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let products = document.getElementsByClassName('product');

  let sumTotal = 0;

  for (let i = 0; i < products.length; i++) {
    var element = products[i];

    sumTotal += updateSubtotal(element);
  }


  // ITERATION 3
  //... your code goes here

  let total = document.querySelector('#total-value span');

  total.innerHTML = sumTotal;


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
