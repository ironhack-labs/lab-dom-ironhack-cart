// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let pricTimesQuantity = price * quantity;
  console.log('Calculating subtotal, yey!');
  let subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = pricTimesQuantity;
  return pricTimesQuantity;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let finalPrice = 0;

  for (let i =0; i < products.length; i++) {
    finalPrice += updateSubtotal(products[i]);
  }
  

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.innerText = finalPrice;
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
