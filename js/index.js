// ITERATION 1

function updateSubtotal(product) {
  return product.forEach((singleProduct) => {
    const price = +singleProduct.querySelector('.price span').innerText;
    const quantity = +singleProduct.getElementsByTagName('input')[0].value;

    singleProduct.querySelector('.subtotal span').innerText = price * quantity;
  });
}

function calculateAll() {
  /// ITERATION 2
  const products = document.querySelectorAll('.product');
  updateSubtotal(products);

  // ITERATION 3
  let total = 0;
  products.forEach((singleSubtotal) => {
    const sub = +singleSubtotal.querySelector('.subtotal span').innerText;
    total += sub;
  });

  document.querySelector('#total-value span').innerText = total;
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
