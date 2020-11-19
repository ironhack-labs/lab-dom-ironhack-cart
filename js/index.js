// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  console.log(price, quantity);
  let subTotalAmount = price * quantity;
  // console.log(subTotalAmount);
  const subtotalEl = product.querySelector(".subtotal");
  subtotalEl.innerHTML = "$" + subTotalAmount;
  return subTotalAmount;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let total = 0;
  allProducts.forEach((product) => {
    const toto = updateSubtotal(product);
    total = total + toto;
  });
  // ITERATION 3
  const totalValue = document.getElementById("total-value");
  totalValue.innerHTML = "Total:$" + total;
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
