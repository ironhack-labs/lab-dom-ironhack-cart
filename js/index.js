// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span');

  let quantity = product.querySelector('.quantity input');

  let subtotal = Number(price.innerHTML) * Number(quantity.value);

  let elementSubtotal = product.querySelector('.subtotal span');

  elementSubtotal.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  let allProducts = document.getElementsByClassName('product');

  let totalPrice = 0;
  for (let singleProduct of allProducts) {
    let subtotal = updateSubtotal(singleProduct);
    totalPrice = totalPrice + subtotal;
  }

  // ITERATION 3
  let elementTotal = document.querySelector('#total-value span');
  elementTotal.innerHTML = totalPrice;
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
