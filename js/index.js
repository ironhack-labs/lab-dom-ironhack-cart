
function updateSubtotal(product) { 

  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseFloat(product.querySelector('.quantity input').value);
 
  let subtotalPrice = product.querySelector('.subtotal span').innerText;
  subtotalPrice = price * quantity;
  return subtotalPrice
 
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

function calculateAll() {

  const totalProducts = document.querySelectorAll('.product');
  updateSubtotal(totalProducts);

  // ITERATION 3
  let total = 0;
  totalProducts.forEach((subtotal) => {   
    const subtotal = +subtotal.querySelector('.subtotal span').innerText;
    total += subtotal;
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

  updateSubtotal(document.querySelector('.product'))

  //... your code goes here
});

