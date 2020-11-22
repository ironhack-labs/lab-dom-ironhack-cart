// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const totalSubtotal = product.querySelector(".subtotal span");
  const subtotal = price.innerHTML * quantity.value;
  totalSubtotal.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll(".product");
  everyProductsSubtotal = 0;

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  //... your code goes here
  const totalPrice = document.querySelector("total-value span");
  totalPrice.innerHTML = updateSubtotal(allProducts[i]);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  let parent = target.parentNode;
  parent.removeChild(event);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  const removeProductBtn = document.querySelectorAll(".btn .btn-remove");
  for (let i = 0; i < removeProductBtn.length; i++)
    removeProductBtn.addEventListener("click", removeProduct(event));
});
