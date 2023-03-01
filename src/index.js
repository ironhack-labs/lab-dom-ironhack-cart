// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');


  console.log(price.innerHTML);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = Number(price.innerHTML) * Number(quantity.value);
  return subtotal;

  price.forEach(e => {
    console.log(e);
  });
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.getElementsByClassName('product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const products = document.getElementsByClassName("product");
  const productsArray = [...products];
  console.log(productsArray);
  productsArray.forEach((products) => {
    updateSubtotal(products);
  });
}

  // products.forEach(product => updateSubtotal(product));

/* products.forEach((product) => {
const quantityInput = product.querySelector(".quantity input");
const unitPrice = parseFloat(product.querySelector(".price span").textContent);
const quantity = parseInt(quantityInput.value);
const subtotal = unitPrice * quantity;
product.querySelector(".subtotal span").textContent = subtotal.toFixed(2);
total += subtotal;
});

//... your code goes here

// ITERATION 3
//... your code goes here

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
});*/
