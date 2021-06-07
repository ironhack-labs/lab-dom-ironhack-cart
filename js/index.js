// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerHTML;

  let quantity = product.querySelector('.quantity input').value;

  let subTotal = price * quantity;

  let subTotalElement = product.querySelector('.subtotal span');

  subTotalElement.innerHTML = subTotal;

  return subTotal;
}

function calculateAll() {
  // ITERATION 2

  //grab products
  let products = document.getElementsByClassName('product');

  [...products].map((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3

  //select updated subtotals
  let subtotals = document.querySelectorAll('.subtotal span');

  //select total element

  let totalElement = document.querySelector('#total-value span');

  //update total value
  let total = 0;
  subtotals.forEach((span) => (total += parseInt(span.innerHTML)));

  totalElement.innerHTML = total;
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

  let removeButtons = document.querySelectorAll('.btn btn-remove');
  removeButtons.forEach((node) =>
    node.addEventListener('click', removeProduct)
  );

  //... your code goes here
});
