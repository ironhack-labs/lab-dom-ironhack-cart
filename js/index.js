
function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
  let subtotalPrice = price * quantity; 
 
  product.querySelector('.subtotal span').innerText = subtotalPrice
  return subtotalPrice
 
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function calculateAll() {

  const totalProducts = document.querySelectorAll('.product');
  totalProducts.forEach(product => {
    updateSubtotal(product)
  })
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

  updateSubtotal(document.querySelector('.product'))

  //... your code goes here
});

