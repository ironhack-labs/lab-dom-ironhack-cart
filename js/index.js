function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let priceValue = price.textContent;
  let quantityValue = quantity.value;

  let subTotalValue = priceValue * quantityValue;
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = subTotalValue;
  return subTotal;
}

function calculateAll() {
  let productPrices = document.querySelectorAll('.product');
  let total = document.querySelector('#total-value span');
  let totalPrice = 0;
  productPrices.forEach((i) => {
    totalPrice += parseFloat(updateSubtotal(i).innerText);
  });
  total.innerText = totalPrice;
}
calculateAll();
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
