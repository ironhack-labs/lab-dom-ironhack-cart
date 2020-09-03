// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  console.log(price.textContent, quantity.value);
  const subTotal = product.querySelector(".subtotal span");
  const resultSubTotal = quantity.value * price.textContent;
  subTotal.textContent = resultSubTotal;
  return resultSubTotal;
}

function calculateAll() {
  var sum = 0;
  const allProducts = document.querySelectorAll(".product");

  allProducts.forEach((product) => {
    sum += updateSubtotal(product);
  });
  document.querySelector("#total-value span").textContent = sum;
  return sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  const newProduct = document.querySelector(".create-product input");
console.log(newProduct)
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtns = document.querySelectorAll(".btn.btn-remove");

  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
      removeProduct(evt);
      calculateAll();

    });

  });

const createBtn = document.getElementById("create");
createBtn.addEventListener("click", createProduct);
});

