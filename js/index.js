// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const priceValue = price.innerText;
  const quantityInput = product.querySelector(".quantity input");
  const quantityValue = quantityInput.value;
  const subtotal = priceValue * quantityValue;

  const subtotalPrint = product.querySelector(".subtotal span");
  subtotalPrint.innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  const productsAdded = document.getElementsByClassName("product");
  const totalValue = document.getElementById("total-value span");
  let total = 0;

  for (let i = 0; i <= productsAdded.length; i++) {
    total += updateSubtotal(productsAdded[i]);
    console.log(total);
  }

  // const productsAddedSum = document.querySelectorAll(".subtotal span");
  // Array.from(productsAddedSum).map((span) => {
  //   let amount = parseFloat(span.innerText, 10);
  //   console.log(amount)
  //   total += amount;
  //   });

  totalValue.innerText = total;
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
