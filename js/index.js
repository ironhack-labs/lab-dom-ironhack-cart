// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = Number(price) * Number(quantity);
  product.querySelector(".subtotal span").innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  let total = 0;
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    total += updateSubtotal(product);
  });

  document.querySelector("#total-value span").innerHTML = total;
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
