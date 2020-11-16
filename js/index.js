// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  console.log(price, quantity);
  const subTotalAmount = price * quantity;
  const subTotalElement = product.querySelector('.subtotal span');
  subTotalElement.innerHTML = subTotalAmount;
  return subTotalAmount;
}

function calculateAll() {
  const shoppingListItems = document.getElementsByClassName('product');
  totalAmount = 0;
  for (let x of shoppingListItems) {
    console.log(x);
    totalAmount += updateSubtotal(x);
  }

  const totalSelector = document.querySelector('#total-value span');
  console.dir(totalSelector);
  totalSelector.innerHTML = totalAmount;
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
