// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input").value;

  let priceValue = parseFloat(price.textContent);

  let subTotal = priceValue * quantity;

  let subTotalElement = product.querySelector(".subtotal span");
  subTotalElement.textContent = subTotal

  return subTotal

}

function calculateAll() {
  let products = document.getElementsByClassName("product");
  let total = 0;

  for (let i = 0; i < products.length; i++) {
  total += updateSubtotal(products[i]);
  }

  let totalElement = document.querySelector("#total-value span");
  totalElement.textContent = total;

}

function removeProduct(event) {

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
