// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  let subTotal = product.querySelector(".subtotal span").innerHTML ;
  subTotal = price * quantity;

  //return subTotal
}

function calculateAll() {
  const productCollection = document.getElementsByClassName("product");

  let total = 0
  for (let i = 0; i <= productCollection.length-1; i++) {
    updateSubtotal(productCollection[i])
    //total += updateSubtotal(productCollection[i]);
  }
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
