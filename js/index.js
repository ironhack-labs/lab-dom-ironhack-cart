// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const subtotal = Number(price) * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;

  console.log(product)
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let allProducts = document.getElementsByClassName('product');
  
  let totalValue = 0;

  for (const product of allProducts) {
    totalValue = totalValue + updateSubtotal(product)
  }

  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = totalValue;
  return totalValue
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

  let allRemoveButtons = document.querySelectorAll('.btn btn-remove');
  allRemoveButtons.onclick = removeProduct(event)
});
