// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalBox = product.querySelector('.subtotal span');

  let subtotal = price * quantity;

  subtotalBox.textContent = subtotal;

  return subtotal;
}

function calculateAll() {
  
  // ITERATION 2 & 3
    const products = document.getElementsByClassName('product');

    const totalPrice = document.querySelector('#total-value span');

    let total = 0;

    Array.from(products).forEach(product => {      
      total += updateSubtotal(product)      
    });
  
    totalPrice.textContent = total;
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
