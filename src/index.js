// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  let priceSubtotal = Number(price.innerHTML) * quantity.value;
  subtotal.innerText = priceSubtotal;

  return priceSubtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let priceTotal = 0;

  for (let i = 0; i < products.length; i++) {
    priceTotal += updateSubtotal(products[i]);
  }

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.innerText = priceTotal;

  return priceTotal;
}

// ITERATION 4 - I didn't finish
function removeProduct(event) {
  const target = event.currentTarget;

  // got confused here
  // element.currentTarget, element.parentNode, element.removeChild() ??

  console.log("The target in remove is:", target);
  //... your code goes here
  const removeBtns = document.getElementsByClassName("btn btn-remove");

  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", removeProduct);
  }
}

// ITERATION 5 - I haven't tried yet.
function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
