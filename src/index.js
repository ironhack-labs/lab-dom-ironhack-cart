// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  console.log("Calculating subtotal, yey!");
  const result = price * quantity;
  product.querySelector(".subtotal span").innerHTML = result;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  let result = 0;
  const products = document.getElementsByClassName("product");
  for (let i = 0; i < products.length; i++) {
    result += updateSubtotal(products[i]);
  }
  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = result;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  const parent = target.parentNode;
  parent.parentNode.removeChild(parent);
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(
    '[placeholder="Product Name"]'
  ).value;
  const productPrice = document.querySelector(
    '[placeholder="Product Price"]'
  ).value;
  console.log("Product created");
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeBtn = document.getElementsByClassName("action");
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProduct);
    removeBtn[i].addEventListener("click", calculateAll);
  }

  //create button
  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
