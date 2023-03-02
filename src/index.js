window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
});

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = price * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  singleProduct = document.getElementsByClassName("product");
  // console.log([...singleProduct]);
  let totalSum = 0;
  [...singleProduct].forEach((product) => {
    totalUpdate = updateSubtotal(product);
    totalSum += totalUpdate;
    document.querySelector("#total-value span").innerHTML = totalSum;
  });
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
