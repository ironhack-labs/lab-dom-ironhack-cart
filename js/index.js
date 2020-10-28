// ITERATION 1,2,3

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

  let nodeListSubtotals = document.querySelectorAll(".subtotal span");

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

  target.parentNode.parentNode.remove();
  calculateAll(); // recalc totals
}
const nodeListRemoves = document.querySelectorAll(".btn-remove");
nodeListRemoves.forEach((rButton) => {
  rButton.addEventListener("click", removeProduct);
});

// ITERATION 5

function createProduct() {

  // newProduct to take the values from the input fields in the input fields which are children of the create product class
  const newProduct = document.querySelectorAll(".create-product > td input");
  const newProductName = newProduct[0].innerHTML;
  const newProductPrice = newProduct[1].innerHTML;
  
  console.log(newProductName);
  console.log(newProductPrice);
}

const createProdButton = document.querySelector("#create");
createProdButton.addEventListener("click", createProduct);

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
