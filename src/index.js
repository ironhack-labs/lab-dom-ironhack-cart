// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const newSubtotal = price.innerText * quantity.value;
  const subtotal = product.querySelector(".subtotal span");

  return (subtotal.innerText = newSubtotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let fullPrice = document.getElementsByClassName("product");
  let total = 0;
  for (let i = 0; i < fullPrice.length; i++) {
    total += updateSubtotal(fullPrice[i]);
  }

  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; //.currentTarget is a property from js
  console.log("The target in remove is:", target.parentNode.parentNode); // console.log just to test (won’t change anything)
  target.parentNode.parentNode.remove(); //parent of button is td and parent of td is tr
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removedProduct = document.querySelectorAll(".btn-remove");
  // for (let i = 0; i < removedProduct.length; i++ ) {
  //  removedProduct.addEventListener(‘click’, removeProduct);
  //... your code goes here
  removedProduct.forEach((product) =>
    product.addEventListener("click", removeProduct)
  );
});
