// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //Accessing html elements that contain the price & quantity values
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // String the price & quantity values in a new variable
  const quantityValue = quantity.value;
  const priceValue = price.innerHTML;

  // Calculating subtotal
  const subTotal = priceValue * quantityValue;

  // Updating subtotal in html
  product.querySelector(".subtotal span").innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  for (let i = 0; i<products.length; i++) {
    updateSubtotal(products[i]);

    console.log("product", products[i]);
  }
  
  // ITERATION 3
  //... your code goes here
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
