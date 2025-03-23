// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  // Step 1: Get the price and quantity elements
  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");

  // Step 2: Extract values (convert price to float and quantity to number)
  const price = parseFloat(priceElement.textContent);
  const quantity = Number(quantityElement.value);

  // Step 3: Calculate subtotal
  const subtotal = price * quantity;

  // Step 4: Get the subtotal element
  const subtotalElement = product.querySelector(".subtotal span");

  // Step 5: Update the subtotal in the DOM
  subtotalElement.textContent = subtotal.toFixed(2);

  // Return the subtotal (useful for the next iterations)
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // Step 1: Get all products (tr with class 'product')
  const allProducts = document.getElementsByClassName("product");

  // Step 2: Loop through each product and update subtotal
  for (let product of allProducts) {
    updateSubtotal(product);
  }
  // ITERATION 3
  // Get all products
  const allProducts2 = document.getElementsByClassName("product");
  let total = 0;

  // Loop through each product and calculate the subtotal
  for (let product of allProducts2) {
    total += updateSubtotal(product); // Reuse the return value of updateSubtotal
  }

  // Update the total value in the DOM
  const totalValueElement = document.querySelector("#total-value span");
  totalValueElement.textContent = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const productRow = target.closest(".product"); // Get the entire <tr class="product">

  productRow.remove(); // Remove the product row from the DOM

  calculateAll(); // Recalculate the total after removing
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  // Step 1: Add event listeners to all remove buttons
  const removeBtns = document.querySelectorAll(".btn-remove");
  removeBtns.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
});
