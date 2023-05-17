// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const priceValue = Number(price.innerText);
  const quantityValue = Number(quantity.value); // it only worked after changing quanity.innerText to quanity.value
  const subtotalValue = quantityValue * priceValue; // .value is important to access the value in the input field...

  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = subtotalValue.toFixed(2);

  return subtotalValue;
}







// Iteration 2 
// I had the following errors: 

/*dex.js:4 Uncaught TypeError: product.querySelector is not a function
    at updateSubtotal (index.js:4:25)
    at index.js:26:5
    at NodeList.forEach (<anonymous>)
    at HTMLButtonElement.calculateAll (index.js:25:15)*/

// the lines doesn't fit anymore, but it went away after putting "allProducts" into the arrow-function inside the forEach function

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const allProducts = document.getElementsByClassName("product");
  //don't know why, but it doesn't work

  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((allProducts) => {
    updateSubtotal(allProducts);
  });

  //const singleProduct = document.querySelector('.product');

  // end of test


/*const totalPrice = document.getElementsByClassName("calculate-total");
totalPrice = */













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
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});