// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const result = price * quantity;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = result;
  console.log("Calculating subtotal, yey!");

  return result;
}

// ITERATION 2 & 3
//... your code goes here

function calculateAll() {
  const products = document.querySelectorAll(".product");
  console.log(products);

  let counter = 0;

  products.forEach((product) => {
    let productTotal = updateSubtotal(product);
    counter += productTotal;
  });

  console.log(counter);

  const totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = counter;
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

  const removeProductBtn = document.getElementsByClassName("btn btn-remove");
  removeProductBtn.addEventListener("click", removeProduct);
});
