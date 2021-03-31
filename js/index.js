// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;

  let subtotal = price * quantity;
  product.querySelector(".subtotal span").innerText = subtotal;

  return subtotal;

  //... your code goes here
}

// // code in the following two lines is added just for testing purposes.
// // it runs when only iteration 1 is completed. at later point, it can be removed.
// const singleProduct = document.querySelector('.product');
// updateSubtotal(singleProduct);
// end of test

// ITERATION 2
//... your code goes here
function calculateAll() {
  let totalSum = 0;
  const total = document.querySelector("#total-value span");
  const products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    totalSum += updateSubtotal(products[i]);
    total.innerText = totalSum;
  }
}

// ITERATION 3
//... your code goes here

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  let trNode = target.parentNode.parentNode;
  let bodyNode = trNode.parentNode;

  bodyNode.removeChild(trNode);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeItems = document.querySelectorAll(".btn-remove");
  removeItems.forEach((button) =>
    button.addEventListener("click", removeProduct)
  );
});
