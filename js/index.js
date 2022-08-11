// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');

  const quantityParent = product.querySelector('.quantity');
  const quantityChildValue = quantityParent.firstElementChild.value;

  const subtotal = product.querySelector('.subtotal span');

  let priceSubtotal = price.innerText * quantityChildValue;
  return (subtotal.innerText = priceSubtotal);
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  const allProducts = document.getElementsByClassName('product');
  const allProductsArray = [...allProducts];
  allProductsArray.forEach((product) => updateSubtotal(product));

  // ITERATION 3
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
