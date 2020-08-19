// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!", product);
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;

  let multitply = price * quantity;
  // console.log(price);

  let subTotal = product.querySelector(".subtotal span");
  subTotal.innerText = multitply; // reassignment

  return multitply;
}

// ITERATION 2

function calculateAll() {
  const allTheProducts = document.querySelectorAll(".product");
  console.log(allTheProducts);
  let total = 0;

  allTheProducts.forEach((product) => {
    console.log(product);
    total += updateSubtotal(product);
    console.log(updateSubtotal(product));
  });

  // let total = document.querySelector("#total-value span");
  // console.log(total);

  document.querySelector("#total-value span").innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target.parentNode.parentNode);
  const tBody = document.querySelector("tbody");
  console.log(tBody);
  tBody.removeChild(target.parentNode.parentNode);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  const removeBtn = document.querySelectorAll(".btn-remove");
  console.log(removeBtn);
  removeBtn.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
});
