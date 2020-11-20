// ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");
  let getPrice = Number(price.innerHTML);

  const quantity = product.querySelector(".quantity input");
  let theQuantity = quantity.value;

  let getSubtotal = product.querySelector(".subtotal span");

  // console.log(getPrice);
  let total = getPrice * theQuantity;

  getSubtotal.innerHTML = total;
  // console.log(getSubtotal);
  return getSubtotal;
}

function calculateAll() {
  const lesProduits = document.querySelectorAll(".product");
  let sum = 0;

  lesProduits.forEach((product) => {
    const update = Number(updateSubtotal(product).innerText);
    return (sum += update);
  });
  // console.log(sum);
  const valueOfTotal = document.querySelector("#total-value span");
  valueOfTotal.innerHTML = sum;
  console.log(valueOfTotal);
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
