// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //step 1: use DOM manipulation to get the elements that hold price and quantity
  const price = product.querySelector('.price span');
  // console.log(price);
  const quantity = product.querySelector('.quantity input');
  // console.log(quantity);

  // step 2: extract the specific values from the previous elements (price and quantity)
  const priceValues = price.innerHTML;
  // console.log(priceValues);
  const quantityValues = quantity.value;
  // console.log(quantityValues);

  // step 3 + 4:get the subtotal element using DOM manipulation then calculate the subtotal price
  let subtotalPrice = product.querySelector('.subtotal span');
  subtotalPrice.innerHTML = priceValues * quantityValues;
  // console.log(subtotalPrice);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  // console.log(allProducts); <- getElementsByClassName gave us an HTMLCollection we need to turn it into an array
  const allProductsArr = Array.from(allProducts);
  // console.log(allProductsArr);
  allProductsArr.forEach(function(product) {
    updateSubtotal(product);
  })


  // ITERATION 3
  //get the totalPrice which is the sum of all subtotalPrices
  const totalPrice = document.querySelector('.total-value span');
  // console.log(totalPrice);
  
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
