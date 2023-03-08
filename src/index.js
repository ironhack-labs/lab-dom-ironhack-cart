// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  let priceValue = Number(price.innerHTML);
  let quantityValue = Number(quantity.value);
  let subtotalValue = priceValue * quantityValue;
  let subtotal = product.querySelector(".subtotal span");
  subtotalValue = subtotal.innerHTML;
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName(".product");
  subtotalSum = 0;
  for (let i = 0; i < products.length; i++) {
    subtotalSum += updateSubtotal(products[i]);
  }

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  let totalValue = Number(total.innerHTML);
  totalValue = subtotalSum;
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
