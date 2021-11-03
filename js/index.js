// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('input').value;
  const p = parseInt(price);
  const q = parseInt(quantity);
  let subt = p * q;
  let subpt = product.querySelector('.subtotal span');
  subpt.innerText = subt;
  return subpt;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  const allProducts = document.querySelectorAll('.product');
  let vTotal = 0;
  
  allProducts.forEach(($element) => {
    updateSubtotal($element);
    vTotal += parseInt($element.querySelector('.subtotal span').innerText);
  });
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerText = vTotal;
  
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
