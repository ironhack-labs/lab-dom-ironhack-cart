// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let priceSubtotal = parseInt(price, 10) * parseInt(quantity, 10);
  product.querySelector(".subtotal span").innerHTML = `${priceSubtotal}`;
  return priceSubtotal;
}

function calculateAll() {
  // ITERATION 2

  const products = document.getElementsByClassName("product");
  let priceProductOne = updateSubtotal(products[0]);
  let priceProductTwo = updateSubtotal(products[1]);

  // ITERATION 3
  let priceTotal = priceProductOne + priceProductTwo;
  document.querySelector("#total-value span").innerHTML = priceTotal;
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
