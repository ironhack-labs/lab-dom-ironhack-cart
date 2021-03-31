// ITERATION 1

function updateSubtotal(product) { //Calculate subtotal of given product
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let productSubtotal = parseFloat(price.innerHTML) * quantity.value;

  product.querySelector('.subtotal span').innerHTML = productSubtotal;

  return productSubtotal
}

function calculateAll() { //On click Calculate Total invoque these function

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let productList = [...document.querySelectorAll('.product')];

  productList.forEach((product) => {
    updateSubtotal(product);
  });
  
  // ITERATION 3
  //... your code goes here
  // sum of each subtotal
  // save subtotal in a newvar+=newvar
  // Update DOM with total value
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
