// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const subtotalPrice = price * quantity;  
  subtotal.innerText = subtotalPrice;
  return subtotal.innerText
}


function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  const total = document.querySelector('#total-value span');
  let totalPrice = 0

  allProducts.forEach(product => {
    updateSubtotal(product);
    totalPrice += +product.querySelector('.subtotal span').innerText;
  }); 

  total.innerText = totalPrice
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
