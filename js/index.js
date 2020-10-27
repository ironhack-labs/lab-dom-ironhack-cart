// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;

  let result = Number(price) * Number(quantity);
  let subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerHTML = result;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let total = 0;
  allProducts.forEach(function (product) {
    total += updateSubtotal(product);
  });
  const totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = total;

  // ITERATION 3
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  //console.log("The target in remove is:", target);
  product.remove();
}

// ITERATION 5

function createProduct() {}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtnArr = document.querySelectorAll(".btn-remove");
  removeBtnArr.forEach(function (btn) {
    btn.addEventListener("click", removeProduct);
  });

  const newProduct = document.querySelector(".create-product");
  newProduct.addEventListener("click", createProduct);
});
