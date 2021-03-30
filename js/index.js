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

  const products = document.querySelectorAll(".product");
  let sum = [];
  products.forEach((item) => {
    sum.push(updateSubtotal(item));
  });

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = sum.reduce(
    (a, b) => a + b
  );
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log(
    "The target in remove is:",
    target.parentNode.parentNode.parentNode
  );
  //... your code goes here
  target.parentNode.parentNode.parentNode.removeChild(
    target.parentNode.parentNode
  );
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeButton = document.querySelectorAll(".btn-remove");
  removeButton.forEach((item) => item.addEventListener("click", removeProduct));
});
