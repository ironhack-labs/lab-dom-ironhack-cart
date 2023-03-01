// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span").innerText;
  const priceNum = parseFloat(price);
  const quantity = product.querySelector(".quantity input").value;
  const quantityNum = Number(quantity);

  const subTotalPrice = priceNum * quantityNum;

  const subTotalElem = product.querySelector(".subtotal span");
  subTotalElem.innerText = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  const products = document.getElementsByClassName("product");
  console.log(products);
  let totalPrice = 0;
  for (const product of products) {
    totalPrice += updateSubtotal(product);
  }
  console.log(totalPrice);
  let totalSum = document.getElementById("total-value");

  totalSum.innerText = totalPrice;
  return totalSum;
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
