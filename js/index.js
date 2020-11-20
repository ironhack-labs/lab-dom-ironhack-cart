// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const total = product.querySelector('.subtotal span');
  let subTotal = price.innerHTML * quantity.value;
  total.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const prodAll = document.querySelectorAll('.product');
  let totalAll = 0;
  prodAll.forEach((product) =>{
    const priceAll = updateSubtotal(product);
    totalAll += priceAll;
 });

  // ITERATION 3
  const totoalSpan = document.querySelector('#total-value span');
  totoalSpan.textContent = totalAll;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.removeChild(event);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeProductButton = document.querySelectorAll('btn btn-remove');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  removeProductButton.forEach((event) => {
    removeProductButton.addEventListener('click', removeProduct);
  })
});
