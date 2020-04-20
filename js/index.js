
function updateSubtotal(product) {

  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = price * quantity;
  return subTotal.innerHTML;
}



function calculateAll() {

  const products = document.getElementsByClassName('product');
  const productsArr = [...products];
  const total = productsArr.reduce((acc, product) => acc + parseFloat(updateSubtotal(product)), 0);
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = total;
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

