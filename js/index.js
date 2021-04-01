// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  let subTotal = price * quantity;

  product.querySelector(".subtotal span").innerText = subTotal;
  return subTotal;
}

function calculateAll() {
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);

  const allProducts = document.querySelectorAll(".product");
  let total = 0;

  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }

  document.querySelector("#total-value span").innerText = total;

  // const price = singleProduct.querySelector(".price span").innerHTML;
  // const quantity = singleProduct.querySelector(".quantity input").value;
  // const subTotalValue = price * quantity;

  // const subTotal = singleProduct.querySelector(".subtotal span").innerHTML;

  // subTotal.innerHTML = subTotalValue;
  // console.log(price);
  // console.log(quantity);
  // console.log(subTotalValue);

  // end of test
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
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.querySelectorAll(".btn btn-remove");
  for (let i = 0; i > removeBtn.length; i--) {
    removeBtn.addEventListener("click ", removeProduct[i]);
  }
});
