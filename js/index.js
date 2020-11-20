// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  let valuePrice = price.innerHTML;
  let valueQuantity = quantity.value;

  return (subtotal.innerHTML = valuePrice * valueQuantity);
}

function calculateAll() {
  const cartItems = document.querySelectorAll(".product");

  cartItems.forEach((product) => updateSubtotal(product));

  const total = document.querySelector("#total-value span");
  const copiedProducts = [...document.querySelectorAll(".subtotal span")];
  const subtotal = copiedProducts.map((array) => +array.innerHTML);

  return (total.innerHTML = subtotal.reduce((acc, curr) => acc + curr));
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  // const removePricesBtn = document.querySelectorAll(".btn-remove");
  // removePricesBtn.addEventListener("click", removeProduct);
});
