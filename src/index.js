// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  // Selecting the price
  const price = product.querySelector(".price span");

  // Trying to select the value field inside of <input> tag inside of the quantity class
  const quantity = product.querySelector(".quantity input");
  let total = Number(quantity.value) * Number(price.innerHTML);

  const subtotal = product.querySelector(".subtotal span");

  subtotal.innerHTML = total;

  return total;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const productCollection = document.getElementsByClassName("product");

  // HTML collection is similar to an array, but instead...
  // console.log(productCollection);

  // now let's convert it to an array with spread operator
  const productsArray = [...productCollection];

  // console.log(productsArray);

  let cartTotal = 0;

  productsArray.forEach((element) => {
    // console.log(element);
    cartTotal += updateSubtotal(element);
  });

  // ITERATION 3

  // query selector to select tag & span
  const cartTotalElement = document.querySelector("#total-value span");

  cartTotalElement.innerHTML = cartTotal;
  // console.log(cartTotal);

  return Number(cartTotal);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  // Tried to select all the remove buttons
  // Not sure if this query selector is correct

  const removeButtons = document.querySelectorAll(".btn .btn-remove");

  // forEach loop to loop through elements, invoke "click" addEventListener with removeProduct as callback function
  removeButtons.forEach(function(element) {
    element.addEventListener("click", removeProduct);
    cartTotal -= updateSubtotal(element);
  });

  // What's still missing is the functionality to remove from the table
  // Couldn't validate if this works because I'm unable to print anything to the console.
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
})