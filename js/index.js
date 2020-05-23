// ITERATION 1

function updateSubtotal(product) {
  const price = document.querySelector('.price > span');
  const quantity = document.querySelector('.quantity > input')

  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber

  const subtotalValue = priceValue * quantityValue;
  product.querySelector('.subtotal > span').innerText = subtotalValue
  return subtotalValue
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product')
  let totalValue = 0;
  for (let product of allProducts) {
    totalValue += updateSubtotal(product);
  }
  document.querySelector('#total-value span').innerText = totalValue;
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
