// ITERATION 1
function updateSubtotal(product) {
  let unitPrice = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = Number(unitPrice.innerHTML) * Number(quantity.value);
  let elementSubtotal = product.querySelector('.subtotal span');
  elementSubtotal.innerHTML = subtotal;
  console.log('Calculating subtotal, yey!');
  return subtotal;
}

// ITERATION 2
//... your code goes here
function calculateAll() {
  let allProducts = document.getElementsByClassName('product');
  for (let product of allProducts) {
    updateSubtotal(product);
  }

  // ITERATION 3

  let total = 0;
  for (product of allProducts) {
    total += updateSubtotal(product);
  }

  return (document.querySelector('#total-value span').innerText = total);
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
