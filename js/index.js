function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  let total = 0;
  const products = document.querySelectorAll('.product');
  for (const product of products) {
    total += updateSubtotal(product);
  }
  document.querySelector('#total-value span').innerHTML = total;
}

function removeProduct(event) {}

function createProduct() {}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
