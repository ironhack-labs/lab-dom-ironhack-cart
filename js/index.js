//* ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const resultOfsubtotal = priceValue * quantityValue;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = resultOfsubtotal;
  console.log(resultOfsubtotal);
  return resultOfsubtotal;
}

//* ITERATION 2
function calculateAll() {
  const products = document.querySelectorAll(".product");
  let totalValue = document.querySelector("#total-value span");
  let sum = 0;
  products.forEach((product) => {
    updateSubtotal(product);
  });
  //* ITERATION 3
  products.forEach((product) => {
    let resultOfsubtotal = updateSubtotal(product);
    sum += resultOfsubtotal;
  });
  totalValue.innerHTML = sum;
  console.log(sum);
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
