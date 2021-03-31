function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subTotal.toFixed(2);
  return subTotal;
}

function calculateAll() {
  let cart = document.querySelector('#cart');
  let cartProducts = cart.querySelectorAll('.product');
  let total = 0;
  cartProducts.forEach((product) => {
    total += updateSubtotal(product);
  });
 document.querySelector('#total-value span').innerText = total.toFixed(2);
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
