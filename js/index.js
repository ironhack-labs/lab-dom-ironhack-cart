// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = parseFloat(product.querySelector('.price span').innerText);
  
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  
  let subtotalPrice = price * quantity;
  
  const subTotalElement = product.querySelector('.subtotal span')
  
  subTotalElement.innerText = subtotalPrice;
}

function calculateAll() {

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach(product => {
    updateSubtotal(product)
  });


  // ITERATION 3
  // const finalTotal = document.querySelectorAll('.subtotal span');
  let totalPrice = 0;
  allProducts.forEach(product => {
  totalPrice += parseFloat(updateSubtotal(product));
  });
  document.querySelectorAll('#total-value span').innerText = totalPrice;

  console.log(totalPrice);
}

console.log(calculateAll);
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
