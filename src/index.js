// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  const subTotal = product.querySelector(".subtotal span");

  console.log(price);
  console.log(quantity);

  let newSubtotal = price * quantity;
  subTotal.textContent = newSubtotal;
  return newSubtotal;
}

function calculateAll() {
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let total = 0;
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });
  // ITERATION 3
  const totalPrice = document.querySelector("#total-value");
  console.log("total" + total);
  totalPrice.innerText = parseInt(total);
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
