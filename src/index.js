// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const priceValue = parseFloat(price.innerText);
  const quantityValue = parseInt(quantity.value);

  const subtotal = priceValue * quantityValue;

  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");

  let totalPrice = 0;
  for (let i = 0; i < allProducts.length; i++) {
    const currentProduct = allProducts[i];
    const subtotalValue = updateSubtotal(currentProduct);
    totalPrice += subtotalValue;
  }

  // ITERATION 3
  const totalPriceElement = document.querySelector("#total-value span");
  totalPriceElement.innerText = totalPrice.toFixed(2);
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
