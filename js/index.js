// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const priceText = price.innerHTML;
  const quantityNum = quantity.value;
  const sum = priceText * quantityNum;
  console.log(sum);
  const subTotal = product.querySelector(".subtotal span");
  return (subTotal.innerHTML = sum);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  //  updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll(".product");
  let total = 0;
  allProducts.forEach((el) => {
    let subtotal = updateSubtotal(el);
    total += subtotal;
  });
  console.log(total);
  const totalValue = document.querySelector("#total-value span");
  return (totalValue.innerHTML = total);
  // ITERATION 3
  //... your code goes here
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
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
