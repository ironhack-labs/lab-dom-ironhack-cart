// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const priceSelector = product.querySelector(".price span");
  const quantitySelector = product.querySelector(".quantity input");

  const quantityValue = quantitySelector.value;
  const price = priceSelector.innerHTML;

  const subtotalProduct = price * quantityValue;

  const subtotalSelector = product.querySelector(".subtotal span");
  subtotalSelector.textContent = subtotalProduct;

  return subtotalProduct;
}

function calculateAll() {
  const allProducts = document.querySelectorAll(".product");

  let counter = 0;
  allProducts.forEach((product) => {
    counter += updateSubtotal(product);
  });

  const totalSelector = document.querySelector("#total-value span");
  totalSelector.textContent = counter;
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
