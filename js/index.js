// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  console.log(price.innerHTML);
  console.log("Calculating subtotal, yey!");
  let subtotal = price.innerHTML * quantity.value;
  console.log(subtotal);
  let subtotalhtml = product.querySelector(".subtotal span");
  subtotalhtml.innerHTML = subtotal;
  return subtotal;

  //... your code goes here
}
// ITERATION 2
//... your code goes here
function calculateAll() {
  const allProducts = [...document.getElementsByClassName("product")];
  allProducts.forEach((prod) => {
    let final = updateSubtotal(prod);
    console.log("final", final);
  });

  // ITERATION 3
  const sumSubTotal = [...document.querySelectorAll(".product .subtotal span")]
    .map((price) => Number(price.textContent))
    .reduce((acc, curValue) => (acc += curValue), 0);
  console.log("sumbsubtotal", sumSubTotal);
  const totalValueCell = document.querySelector("#total-value span");
  totalValueCell.innerHTML = sumSubTotal;
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
