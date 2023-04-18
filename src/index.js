// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  let subtotalPrice = price.innerHTML * quantity.value;

  let subtotal = product.querySelector(".subtotal span");

  subtotal.innerHTML = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  let allProducts = document.getElementsByClassName("product");
  let arrayOfProducts = [...allProducts];

  let total = 0;
  arrayOfProducts.forEach((element) => {
    total += updateSubtotal(element);
  });

  // ITERATION 3
  let totalInHTML = document.querySelector("#total-value span");
  totalInHTML.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target.parentNode.parentNode);
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", removeProduct);
  }
});
