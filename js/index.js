// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;
  const subtotalValue = priceValue * quantityValue;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = subtotalValue;
  return subtotalValue;
}

// ITERATION 2 and 3

function calculateAll() {
  const myProduct = document.querySelector('.product');
  updateSubtotal(myProduct);
  const allProducts = document.querySelectorAll('.product');
  let totalPrice = 0;
  for (let product of allProducts) {

    totalPrice += updateSubtotal(product);
  }
  let totalCurrency = document.querySelector('#total-value span'); 
  totalCurrency.innerText = totalPrice;
  return totalPrice;
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
