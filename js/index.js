// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subtotalValue = price * quantity;

  const subTotal = product.querySelector('.subtotal span').innerHTML = subtotalValue;

  return subtotalValue
}

// ITERATION 2

function calculateAll() {
  const productPrice = document.querySelectorAll('.product')
  let total = 0

  productPrice.forEach(Element => {
    total += updateSubtotal(Element)
  });

  // ITERATION 3

  const totalPrice = document.querySelector('#total-value span').innerHTML = total;
}

// // ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log('The target in remove is:', target);
//   //... your code goes here
// }

// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });