// ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");
  const price = document.querySelector(".price span");
  const priceValue = price.textContent;
  const quantity = document.querySelector(".quantity input");
  const quantityValue = quantity.value;
  let resultOfSubtotal = priceValue * quantityValue;
  const subtotal = document.querySelector(".subtotal span");
  subtotal.innerHTML = resultOfSubtotal;
  return subtotal && subtotal.innerHTML;
}

function calculateAll() {
  console.log("Calculating all, yey!");
  // ITERATION 2
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    updateSubtotal(product);
  });

  console.log(products);

  // ITERATION 3
  //... your code goes here
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
