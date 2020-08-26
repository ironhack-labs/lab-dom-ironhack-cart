// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const quantity = product.querySelector(".quantity input").value;
  const price = product.querySelector(".price span").innerHTML;
  const subtotal = price * quantity;

  product.querySelector(".subtotal").innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);

  let total = 0;
  const AllProducts = document.querySelector(".product");

  AllProducts.forEach((elem) => {
    total += updateSubtotal(elem);
  });
  document.querySelector("#total-value span").innerHTML = total;

  // ITERATION 2
  //... your code goes here

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
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
