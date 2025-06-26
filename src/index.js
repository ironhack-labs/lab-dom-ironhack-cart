// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  let priceValue = parseFloat(price.innerHTML);
  let quiantityValue = parseFloat(quantity.value);

  const subtotal = priceValue * quiantityValue;

  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerHTML = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const subtotal = updateSubtotal(product);
    totalPrice += subtotal;
  }

  // ITERATION 3
  //... your code goes here
  const totalElement = document
    .getElementsById(".total-value")
    .querySelector("span");
  totalElement.innerHTML = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
