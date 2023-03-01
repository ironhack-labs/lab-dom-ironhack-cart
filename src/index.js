  // ITERATION 1

function updateSubtotal(product) {
  const priceElm = product.querySelector('.price span');
  const quantityElm = product.querySelector('.quantity input');
  const subtotalElm = product.querySelector('.subtotal span');

  const priceValue = priceElm.innerHTML;
  const quantityValue = quantityElm.value;

  const subquantityValue = priceValue * quantityValue;

  subtotalElm.innerHTML = subquantityValue;

  return subquantityValue;
}

function calculateAll() {
  // ITERATION 2 / 3

  const productElm = document.getElementsByClassName('product');
  const totalProdValueElm = document.querySelector('#total-value span');
  let totalProductsPrice = 0;

  for(let i = 0; i < productElm.length; i++) {
    const currentProduct = productElm[i];
    const currentTotal = updateSubtotal(currentProduct);
    totalProductsPrice += currentTotal;
  }

  totalProdValueElm.innerHTML = totalProductsPrice;
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
