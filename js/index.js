// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span')
  let subtotalCalc = parseInt(price.innerHTML) * parseInt(quantity.value);
  subtotal.innerHTML = subtotalCalc
  return subtotalCalc
}

function calculateAll() {
  const nodeProducts = document.querySelectorAll('.product');
  const arrayProducts = [...nodeProducts]
  arrayProducts.forEach(updateSubtotal)
}

function sumForTotal() {
  const calcPrices = document.querySelectorAll('.subtotal span');
  arrayPrices = [...calcPrices.value]
  arrayPrices.reduce
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

const calculatePricesBtn = document.getElementById('calculate');
calculatePricesBtn.addEventListener('click', updateSubtotal);
calculatePricesBtn.addEventListener('click', calculateAll);

/*
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  

  //... your code goes here
});
*/