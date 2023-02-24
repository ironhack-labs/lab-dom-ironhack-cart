// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal");
  const total = price * quantity;
  subtotal.innerHTML = total;
  return total;
}

function calculateAll() {
  const parentEl = document.querySelector("tbody");
  const products = parentEl.getElementsByClassName("product");
  for(let i = 0; i < products.length; i++){
    updateSubtotal(products[i]);
  }
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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
