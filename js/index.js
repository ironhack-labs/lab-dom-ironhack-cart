// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let priceValue = parseFloat(price.innerText);
  let quantityValue = quantity.value;

  let calculate = priceValue * quantityValue;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = calculate;

  return calculate;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let total = 0;

  for (let product of allProducts) {
    let subtotal = updateSubtotal(product);
    total += subtotal;
  }

  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
}

/* const calculate = document.getElementById('calculate');
calculate.onclick(calculateAll); */

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
