// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector("#quantity").value;
  const subtotal = product.querySelector(".subtotal span");
  let subtotalPrice = price * quantity;
  subtotal.innerHTML = `${subtotalPrice}`;
  return subtotalPrice;
}
function calculateAll() {
  const products = document.getElementsByClassName("product");
  const priceEl = document.querySelector("#total-value span");
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }
  priceEl.innerHTML = total;
}
calculateAll();
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
