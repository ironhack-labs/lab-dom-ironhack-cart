// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector(".price span").innerHTML)
  const quantity = parseInt(product.querySelector(".quantity input").value)
  subtotal = price * quantity
  const subtotalElem = product.querySelector('.subtotal span');
  subtotalElem.textContent = subtotal;
  return subtotal
}

function calculateAll() {
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach(product => {
    total += updateSubtotal(product);
  });
  document.querySelector('#total-value span').textContent = total;
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
