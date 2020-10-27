// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span ").innerHTML;
  console.log("price : ", price);

  const quantity = product.querySelector(".quantity input");
  const qty = Number(quantity.value);

  console.log("quantity string", quantity);
  console.log("qty number", qty);

  let subtotal = price * qty;
  const subtotalDec = subtotal.toFixed(2);

  console.log("The subtotal is: ", subtotalDec);

  let subtotalDisplay = product.querySelector(".subtotal span");
  subtotalDisplay.innerHTML = subtotalDec;
}

function calculateAll() {
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach(function (el) {
    updateSubtotal(el);
  });
  // *********
  let nodeListSubtotals = document.querySelectorAll(".subtotal>span");
  console.log(nodeListSubtotals);

  let sum = 0;
  for (i = 0; i < nodeListSubtotals.length; i++) {
    sum += Number(nodeListSubtotals[i].innerHTML);
  }

  let total = document.querySelector("#total-value span");
  total.innerHTML = `${sum}`;

  return sum;
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
