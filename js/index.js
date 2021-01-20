// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subTotal = price * quantity;
  const subTotalElement = product.querySelector(".subtotal span");
  subTotalElement.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  let cartTotal = 0;
  var productList = [...document.getElementsByClassName("product")];
  // stupid way with for now... improve later
  for (ndx = 0; ndx < productList.length; ndx++)
    cartTotal += updateSubtotal(productList[ndx]);

  // ITERATION 3
  const totalElement = document.querySelector("#total-value span");
  console.log(totalElement);
  totalElement.innerHTML = cartTotal;
  return cartTotal;
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
