// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  let subTotalCalc = price.innerHTML * quantity.value;

  let subTotal = product.querySelector(".subtotal span");
  subTotal.innerHTML = subTotalCalc;

  console.log("Calculating subtotal, yey!");
}

function calculateAll() {
  //code in the following two lines is added just for testing purposes.
  //it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll('.product');
  allProducts = 0;
  for (let i = 0; i < products.length; i += 1) {
    allProducts += updateSubtotal(products[i]);
  }

  // ITERATION 3
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
