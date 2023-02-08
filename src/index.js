// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseFloat(quantity.value);
  const upSubtotal = priceValue * quantityValue;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = upSubtotal;
  return upSubtotal;
}

function calculateAll() {
    // ITERATION 2
  let total = 0
  const products = document.querySelectorAll('.product');
  for (let i = 0; i < products.length; i++){
   updateSubtotal(products[i]);
   total += updateSubtotal(products[i]);
  }
  
  // ITERATION 3
  const showTotal = document.querySelector('#total-value');
  showTotal.innerHTML = `$${total}`;
  return total;

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
