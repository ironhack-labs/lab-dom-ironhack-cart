// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");
  const value = price * quantity;
  subtotal.textContent = value;
  return parseFloat(value);
}

function calculateAll() {
    
  const products = document.querySelectorAll(".product");
  const totalValueDisplay = document.querySelector("#total-value span");
  let totalValue = 0;
  products.forEach(product => totalValue += updateSubtotal(product));
  totalValueDisplay.textContent = totalValue;
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
