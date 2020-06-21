var prices = document.getElementsByClassName(".price span");
var quantities = document.getElementsByClassName("input");
var subTotals = document.getElementsByClassName(".subtotal span");
var removeBtns = document.querySelectorAll(".btn-remove");
console.log(removeBtns);
var allProducts = document.querySelectorAll(".product");

// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector("input").value;
  const subTotal = price * quantity;
  const subTotalElement = product.querySelector(".subtotal span");
  subTotalElement.innerText = subTotal;
  return subTotal;
}

// ITERATION 2

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const allProducts = document.querySelectorAll(".product");

  allProducts.forEach((product) => {
    updateSubtotal(product);
  });

  const subTotals = document.querySelectorAll(".subtotal span");

  // ITERATION 3

  subTotals.forEach((subTotal) => {
    subTotal.innerText;
    //console.log(subTotal);
  });

  const subTotalElements = document.querySelectorAll(".subtotal span");
  var total = sum(subTotalElements);
  document.getElementById("total-value").innerText = total;
}

function sum(array) {
  //console.log(array);
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    //console.dir(array[i]);
    var element = Number(array[i].innerText);
    total += element;
  }
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener("click", removeProduct);
  });
});
