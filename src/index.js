// ITERATION 1
function updateSubtotal(product) {
  console.log(
    "Calculating subtotal, yey!",
    product
  );

  // get price and quantity elements and assign them to variables
  const price = parseFloat(
    product.querySelector(".price span").innerText
  );
  const quantity = parseInt(
    product.querySelector(".quantity input").value
  );

  // calculate subtotal
  const subTotal = price * quantity;

  // get the subtotal Element and assign it to the new total
  const subtotalElement = product.querySelector(
    ".subtotal span"
  );
  subtotalElement.innerText = subTotal;

  console.log("The subtotal is ", subTotal);
}

function calculateAll() {
  // ITERATION 2
  // get all products
  const allProducts =
    document.getElementsByClassName(`product`);

  // loop through each product and execute updatesubtotal function
  for (let i = 0; i < allProducts.length; i++) {
    const element = allProducts[i];
    updateSubtotal(element);
  }

  // ITERATION 3
  //... your code goes here
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
  const calculatePricesBtn =
    document.getElementById("calculate");
  calculatePricesBtn.addEventListener(
    "click",
    calculateAll
  );

  //... your code goes here
});
