// ITERATION 1

function updateSubtotal(product) {
  //step 1 and 2
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = product.querySelector('.quantity input').value;

  //step 3 and 4

  const valueOfSubtotal = price * quantity;

  //step 5
  const subtotalEl = product.querySelector('.subtotal span');
  subtotalEl.innerHTML = valueOfSubtotal;

  return valueOfSubtotal;

  //console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    let currentProduct = products[i]; //the product on the list is assigned to current product
    total += updateSubtotal(currentProduct);
  }
  console.log(total);
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
