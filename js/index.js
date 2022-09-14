// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  let subtotalPrice = price * quantity;
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerText = subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = [...document.getElementsByClassName('product')];
  let total = 0;
  for (let product of allProducts) {
    let unitPrice = updateSubtotal(product);
    Number((total += unitPrice));
  }
  const totalspan = document.querySelector('#total-value span');
  totalspan.innerHTML = total.toFixed(2);
}
// end of test

// ITERATION 2
//... your code goes here

// ITERATION 3
//... your code goes here

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const rows = target.parentNode.parentNode.parentNode;
  const tb = rows.parentNode;
  tb.removeChild(rows);

  calculateAll();
}
const buttons = document.getElementsByClassName('btn btn-remove');
for (let button in buttons) {
  button.addEventListener('click', removeProduct);
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
