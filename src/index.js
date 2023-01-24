// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  let result = Number(price.innerText) * quantity.value;

  let subTotal = product.querySelector(".subtotal span");

  subTotal.innerHTML = result;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  let allProducts = document.getElementsByClassName("product");

  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    let productPrice = updateSubtotal(allProducts[i]);
    total += productPrice;
  }

  // ITERATION 3

  let allTotal = document.querySelector("#total-value span");

  allTotal.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);

  event.target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  let productName = document.querySelector(".create-product input");
  productName.value;
  let productPrice = document.querySelector("#product-price");
  productPrice.value;

  let newRowProduct = document.createElement("tr");
  newRow.classList(".product");

  let newRowName = document.createElement("td");
  newRowName.classList(".name");

  let newRowNameSpan = document.createElement("span");
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  let removers = document.querySelectorAll(".btn-remove");

  removers.forEach((remover) => {
    remover.addEventListener("click", removeProduct);
  });

  let newProduct = document.querySelector(".create-product");
  newProduct.addEventListener("click", createProduct);
});
