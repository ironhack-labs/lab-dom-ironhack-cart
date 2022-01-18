// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span');
  const quantity = product.querySelector(".quantity>input");
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseInt(quantity.value);
  let subtotal = (priceValue * quantityValue);
  product.querySelector(".subtotal span").innerText = subtotal.toFixed(2);
  return subtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll('.product');
  let total = 0;

  for (i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  document.querySelector("#total-value span").innerText = total.toFixed(2);
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
