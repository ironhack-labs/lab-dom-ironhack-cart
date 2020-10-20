// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");
  let subtotalPrice = price.innerHTML * quantity.value;
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;

  console.log("Calculating subtotal, yey!");
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");
  let totalValue = 0;
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    totalValue += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = totalValue;
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
