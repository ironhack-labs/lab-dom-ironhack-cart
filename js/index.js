// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = price.innerHTML * quantity.value;

  return price * quantity;
};

function calculateAll() {
  
  // ITERATION 2
  const productClass = document.getElementsByClassName('product');
  let total = 0;

  for (let i = 0; i < productClass.length; i++) {
      total += updateSubtotal(productClass[i]); 
  }

  // ITERATION 3
  const finalPrice = document.querySelector('#total-value span');
  finalPrice.innerHTML = total;
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
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
