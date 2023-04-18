// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span");
  //como input não tem class/id tem de se ir pela tag name
  const quantity = product.getElementsByTagName("input")[0];

  let total = price.innerHTML * quantity.value;

  let subTotal = product.getElementsByClassName("subtotal")[0];

  subTotal.innerHTML = total.toString();

  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  let myProducts = [...products];

  let subTotal = 0;

  for (let i = 0; i < myProducts.length; i++) {
    subTotal += updateSubtotal(myProducts[i]);
  }

  // ITERATION 3
  //... your code goes here

  const total = document.querySelector("#total-value span");

  total.innerHTML = subTotal.toString();
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();

  //event.currentTarget

  //.removeChild()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.getElementsByClassName("btn-remove");

  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", removeProduct);
  }

  //... your code goes here
});
