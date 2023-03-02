// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let total = Number(price) * Number(quantity);
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = total;
  return +subtotal.innerHTML;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // ITERATION 3
  let totalPrices = 0;

  const products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    totalPrices += updateSubtotal(products[i]);
  }
  let totalFinal = document.querySelector("#total-value span");
  totalFinal.innerHTML = totalPrices;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  target.parentNode.parentNode.remove();
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
