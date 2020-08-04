// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.price span`).innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subTotal = price * quantity;
  const value = product.querySelector(`.subtotal span`);
  value.innerHTML = subTotal;
  return Number(value.innerHTML);
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  

  // ITERATION 2
  

  // ITERATION 3
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

// ITERATION 5

function createProduct() {
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});
