// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const preco = Number(price.innerHTML);
  const qty = Number(quantity.value);

  const subtotal = preco * qty;

  const subtotalElement = product.querySelector(".subtotal span");

  subtotalElement.innerHTML = subtotal;

  return subtotal;

  //... your code goes here
}
console.log("Calculating subtotal, yey!");
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  for (let i = 0; i < singleProduct.length; i++) {
    updateSubtotal(singleProduct[1]);
    // end of test

    // ITERATION 2
    //... your code goes here

    // ITERATION 3
  } //... your code goes here
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
