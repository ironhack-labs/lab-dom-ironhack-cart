// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const subtot = product.querySelector('.subtotal span');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  

  const priceValue = Number(price.textContent);
  const quantityValue = Number(quantity.value) || 0;
  const subtotalValue = priceValue * quantityValue;

  subtot.textContent = subtotalValue;

  return subtotalValue;
}

const bigSubtotal = document.querySelector('#total-value span');

function calculateAll() {
  let sum = 0;
  // ITERATION 2
  const products = [...document.getElementsByClassName('product')];

  products.forEach((products) => {
    const tot = updateSubtotal(products);
    sum += tot;
  });

  // ITERATION 3
  bigSubtotal.textContent = sum;
}

// ITERATION 4

  function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
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
