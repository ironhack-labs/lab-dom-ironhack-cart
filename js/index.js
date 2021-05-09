// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = product.querySelector(".subtotal span");

  let mult = price*quantity;
  subtotal.innerHTML = mult;

  return mult;
}

function calculateAll() {

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let total = 0;

  for (product of products) {
    total += updateSubtotal(product);
  }

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total
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
