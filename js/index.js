// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let result = price.innerHTML * quantity.value
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = result;
  return result;
}

function calculateAll() {
  let allProducts = document.getElementsByClassName('product');
  let acc = 0;

  for (let i = 0; i < allProducts.length; i++) {
    acc += updateSubtotal(allProducts[i]);
  }
  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = acc;
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
