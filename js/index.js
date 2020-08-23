// // ITERATION 1

// function updateSubtotal(product) {
//   console.log("Calculating subtotal, yey!");
//   const price = product.querySelector(".price span").innerHTML;
//   const quantity = product.querySelector(".quantity input").value;
//   const subtotalPrice = price * quantity;
//   product.querySelector(".subtotal span").innerHTML = subtotalPrice;
//   return subtotalPrice;
// }

// function calculateAll() {
//   // ITERATION 2
//   const singleProduct = document.querySelectorAll(".product");
//   singleProduct.forEach((elm) => {
//     productsPrice += updateSubtotal(elm);
//     console.log(productsPrice);
//     const totalValue = (document.querySelector(
//       "#total-value span"
//     ).textContent = subTotal);
//   });
//   // ITERATION 3
//   // let total = 0;
//   // totalPrice = document.querySelector("#total-value span").innerHTML;
//   // total = totalPrice.innerHTML;
// }

// // ITERATION 4

// function removeProduct(event) {
//   const target = event.currentTarget;
//   console.log("The target in remove is:", target);
// }

// // ITERATION 5

// function createProduct() {
//   //... your code goes here
// }

// window.addEventListener("load", () => {
//   const calculatePricesBtn = document.getElementById("calculate");
//   calculatePricesBtn.addEventListener("click", calculateAll);
// });
// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotalPrice = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // ITERATION 2
  const productValue = document.querySelectorAll(".product");
  let total = 0;
  for (let i = 0; i < productValue.length; i++) {
    total += updateSubtotal(productValue[i]);
  }

  // ITERATION 3
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const tableBody = document.querySelector("tbody");
  const buttonNode = target.parentNode;
  parentNode = buttonNode.parentNode;
  document.querySelector("tableBody").removeChild(parentNode);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
});
