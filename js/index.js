// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  let subtotalPrice = price.innerHTML * quantity.value;

  let subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotalPrice;
console.log(price)
  return subtotalPrice;
}

function calculateAll() {

  // ITERATION 2
  const products = document.querySelectorAll('.product');
 
  const total = [...products].reduce((acc, product) => {
    return acc + updateSubtotal(product)
  }, 0)
  console.log(total)
  // for (let i = 0; i < products.length; i++) {
  //   updateSubtotal(products[i]);
  // }


  

  
  // ITERATION 3
  let totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total;
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
