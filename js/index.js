// ITERATION 1

//const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //step 1: use DOM manipulation to get the elements that hold price and quantity
  const price = product.querySelector('.price span');
  // console.log(price);
  const quantity = product.querySelector('.quantity input');


  // step 2: extract the specific values from the previous elements (price and quantity)
  const priceValues = Number(price.innerHTML);
  //console.log(typeof priceValues);
  const quantityValues = quantity.value;

  // step 3 + 4:get the subtotal element using DOM manipulation then calculate the subtotal price
  let subtotalPrice = priceValues * quantityValues
  product.querySelector('.subtotal span').innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let total = 0;
  
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  const allProductsArr = Array.from(allProducts);

 
  allProductsArr.forEach(function(product) {
    total += updateSubtotal(product); 
  })

  // ITERATION 3
  //get the totalPrice which is the sum of all subtotalPrices
  document.querySelector('#total-value span').innerHTML = total;

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
