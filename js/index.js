// ITERATION 1
function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = product.querySelector(".subtotal span");
  const subtotalCalc = price * quantity;

  console.log(price, " * ", quantity, " =  ", subtotalCalc, "subtotal = ", subtotal);
  subtotal.innerHTML = subtotalCalc;
  return subtotalCalc;
}

function calculateAll() {
  // ITERATION 2
  let productList = [...document.querySelectorAll(".product")];
  let totalProduct = 0;
  productList.map((product) => {
  totalProduct += updateSubtotal(product);
  });

  // ITERATION 3
  let totalVal = document.querySelector("#total-value span");
  totalVal.innerHTML = totalProduct;
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
