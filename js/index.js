// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");
  const totalPriceDisplay = document.getElementById("total-value");

  let total = 0;

  let priceValue = parseFloat(price.innerHTML).toFixed(2);
  let quantityValue = quantity.value;
  subtotal.innerHTML = parseFloat(priceValue * quantityValue).toFixed(2);

  console.log(">>>" + subtotal.innerHTML);
  return subtotal.innerHTML;
  // console.log(priceValue);
  // console.log(quantityValue);
  // console.log(subtotal)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");
  const totalPriceDisplay = document.querySelector("#total-value span");
  const allProducts = document.querySelectorAll(".product");
  let total = 0;

  products.forEach((product) => {
    updateSubtotal(product);
    total += Number(updateSubtotal(product));
  });

  totalPriceDisplay.innerHTML = total;
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
