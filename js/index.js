// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotalPrice = parseFloat(price.textContent) * quantity.value;
  const subtotal = product.querySelector('.subtotal span');

  subtotal.textContent = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  let totalPrice = 0;
  const totalPriceDisplay = document.querySelector('#total-value span');

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    totalPrice += updateSubtotal(allProducts[i]);
  }

  totalPriceDisplay.textContent = totalPrice;

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
