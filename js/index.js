// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = parseFloat(product.querySelector('.price span').innerHTML);
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const subtotal = product.querySelector('.subtotal span');
  let total = price * quantity;
  subtotal.innerHTML = total;
  return total;
}

// ITERATION 2 & 3
function calculateAll() {
  let totalPriceNew = 0;
  const totalPrice = document.querySelector("h2 span");
  const products = document.querySelectorAll('.product');
  let update = products.forEach((element) => {
    updateSubtotal(element),
      totalPriceNew += updateSubtotal(element)
  });
  totalPrice.innerHTML = totalPriceNew;
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
