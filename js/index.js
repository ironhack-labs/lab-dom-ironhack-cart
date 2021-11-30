// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotalAmount = price.innerHTML * quantity.value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalAmount;
  return subtotalAmount;
}

// ITERATION 2 & 3

function calculateAll() {
  let productList = document.querySelectorAll('.product');
  let totalValue = document.querySelector('#total-value span');
  const totalAmount = [];
  productList.forEach((product) => {
    updateSubtotal(product);
    totalAmount.push(updateSubtotal(product));
  });
  totalValue.innerHTML = totalAmount.reduce((sum, subtotal) => {
    return sum + subtotal;
  }, 0);
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
