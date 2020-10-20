// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity");
  let priceVal = price.innerHTML;
  let quantityVal = product.querySelector("input").value;
  let subtotalVal = priceVal * quantityVal;
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalVal;
  return subtotalVal;
}
// ITERATION 2
function calculateAll() {
  let totalPrice = 0;
  let products = document.querySelectorAll(".product");
  products.forEach((prod) => {
    totalPrice += updateSubtotal(prod);
  });
  // ITERATION 3
  document.querySelector("#total-value span").innerText = totalPrice;
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
