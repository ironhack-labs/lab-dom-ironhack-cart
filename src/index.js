// ITERATION 1
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const priceValue = parseFloat(price.innerText);
  const quantityValue = parseInt(quantity.value);

  const subtotalValue = priceValue * quantityValue;

  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = subtotalValue.toFixed(2);

  return subtotalValue;
}

//function calculateAll() {
// code in the following two lines is added just for testing purposes.
// it runs when only iteration 1 is completed. at later point, it can be removed.
//const singleProduct = document.querySelector(".product");
//updateSubtotal(singleProduct);
// end of test

// ITERATION 2
function calculateAll() {
  const allProducts = document.querySelectorAll(".product");

  let total = 0;

  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });

  const totalElement = document.querySelector("#total-value span");
  totalElement.innerText = total.toFixed(2);
}

// ITERATION 3
function calculateAll() {
  const allProducts = document.querySelectorAll(".product");
  let total = 0;

  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });

  document.querySelector("#total-value span").innerText = total.toFixed(2);
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
