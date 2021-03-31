// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText
  const quantity = product.querySelector('.quantity input').value
  let subTotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subTotal;
  return subTotal
}

function calculateAll() {
  // ITERATION 2
  let sum = 0;
  const products = document.getElementsByClassName('product');
  for (let product of products) {
    sum += updateSubtotal(product);
  }


  // ITERATION 3
  document.querySelector('#total-value span').innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(button => {
    button.addEventListener('click', removeProduct)
  })
});