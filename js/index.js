// Function to calculate the total price of each type of product
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  let subtotalPrice = price * quantity;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return  subtotalPrice;
}

// Function to calculate the total of the products in the cart
function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let subtotal = 0;

  for (let i = 0; i < allProducts.length; i++) {
    subtotal += updateSubtotal(allProducts[i]);
  }

  document.querySelector('#total-value span').innerHTML = subtotal;
}

// Remove the product from the cart
function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  target.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  for(btn of document.getElementsByClassName('btn-remove')){
    btn.addEventListener('click',removeProduct);
  }

  //... your code goes here
});