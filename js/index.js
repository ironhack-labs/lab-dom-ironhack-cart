// ITERATION 1

/* Hi Aline and Santi, has you know, I had a lot of trouble with this lab,
 after our talk I still manage to finish it at least the first iteration but I was unable, as the result is undefined. 
 Can you please have a look at this to see what I did wrong?
 I will try to pick this lab up to try to solve it later this week */

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const priceContent = parseInt(price).innerText;

  const quantity = product.querySelector('input').value;
  const incrementQuantity = quantity.valueAsNumber;

  const subtotalPrice = priceContent * incrementQuantity;

  const subTotalcontainer = product.querySelector('.subtotal span');
  const subtotalContent = subTotalcontainer.innerText;

  const subTotal = (subtotalContent.innerHTML =
    '<em>' + subtotalPrice + '</em>');

  return subTotal;
}

// ITERATION 2

function calculateAll() {
  const products = document.getElementsByClassName('.product');
  updateSubtotal(products);
}
// ITERATION 3

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
