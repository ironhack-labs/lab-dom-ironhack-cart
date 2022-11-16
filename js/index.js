// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML
  const quantity = product.querySelector(".quantity input").value

  product.querySelector(".subtotal span").innerHTML = price * quantity;
  return price * quantity;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll('.product')
  let total = 0;
  products.forEach(product => total += updateSubtotal(product))

  // ITERATION 3
  const totalDisplay = document.querySelector('#total-value span')
  totalDisplay.innerHTML = total
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
