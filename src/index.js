// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  // subtotal =  price * quantity
  // 1. Get the value of the price
  const productPrice = product
    .querySelector(".price")
    .innerText.replace("$", "");
  //console.log("productPrice", productPrice);
  // 2. Get the value of the quantity
  const productQuantity = product.querySelector("input").value;
  //console.log("productQuantity", productQuantity);
  // 3. calculate the subtotal
  const subTotal = productPrice * productQuantity;
  //console.log("subtotal", subTotal);
  const subtotalElement = product.querySelector(".subtotal span");
  // 4. Display the result (subtotal)

  subtotalElement.innerText = subTotal;
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
  //console.log("products", products);
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  //... your code goes here
  let sum = 0;
  const allSubtotals = document.querySelectorAll(".subtotal span");

  //console.log("allSubtotals", allSubtotals);

  for (let i = 0; i < allSubtotals.length; i++) {
    sum += Number(allSubtotals[i].innerText);
  }
  //console.log("sum", sum);
  document.querySelector("#total-value span").innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const productRow = target.closest(".product");
  productRow.remove();
  calculateAll();
}

const removeBtn = document.querySelectorAll(".btn-remove");
removeBtn.forEach((btn) => {
  btn.addEventListener("click", removeProduct);
});
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
