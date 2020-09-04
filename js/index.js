//* ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const resultOfsubtotal = priceValue * quantityValue;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = resultOfsubtotal;
  return subtotal;
}

//* ITERATION 2
function calculateAll() {
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    updateSubtotal(product);
  });

  console.log(products);

  // ITERATION 3
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
