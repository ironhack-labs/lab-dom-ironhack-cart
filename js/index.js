// ITERATION 1

function updateSubtotal(product) {
  // console.log("update call", product);
  const price = product.querySelector(".price span").innerHTML;
  // console.log(price);
  const quantity = product.querySelector(".quantity input").value;
  // console.log(quantity);

  let totalPrice = price * quantity;
  product.querySelector(".subtotal span").innerText = totalPrice;

  return totalPrice;
  // console.log(totalPrice);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  document.querySelectorAll(".product").forEach((element) => {
    // console.log(element);
    updateSubtotal(element);
  });

  // end of test

  // ITERATION 2
  //... your code goes here

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
