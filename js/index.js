// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input'); 
  price = price.innerHTML;
  quantity = quantity.value;

  let subtotal = product.querySelector('.subtotal span');
  quantity * price = subtotal.innerHTML;

  let finalTotal = subtotal.innerHTML;
  return finalTotal;
}


// Complete the function named calculateAll(). Its purpose is to call the function updateSubtotal with every tr.product DOM node in the table#cart.

// To start, remove or comment out the existing code inside the calculateAll() (the code we used for the testing purposes). Also, let's add a new product to our index.html file. Duplicate the tr with the class product, rename the product inside, and change the product price.

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 
  let secondProduct = product.querySelector(".product");

  let newProduct = secondProduct.cloneNode(true);

  let newProduct = ('Products')

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
