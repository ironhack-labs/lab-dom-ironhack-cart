// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = quantity * price;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = subtotalPrice;

  console.log('subtotal iteration' + subtotalPrice)
  
  return subtotalPrice;

}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let totalPrice= 0;

  for (let i = 0; i< allProducts.length; i++){
    totalPrice += updateSubtotal(allProducts[i]);
  } 

  // ITERATION 3
  
  let total = document.getElementById('total-value').querySelector('span');
  total.textContent = totalPrice;
  console.log('subtotal iteration' + totalPrice)
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

  const removeProdBtn = document.getElementsByClassName('.action .btn-remove');
  removeProdBtn.addEventListener('click', removeProduct);
});
