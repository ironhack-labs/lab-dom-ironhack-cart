// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");

  const quantity = product.querySelector(".quantity input");

  let subtotalResult = Number(price.innerText) * Number(quantity.value);

  let subtotalResultNumber = product.querySelector(".subtotal span");

  //Print subtotal result in html

  subtotalResultNumber.innerHTML = `${subtotalResult}`;

  //Return subtotal for later use

  return subtotalResult;
}

function calculateAll() {
  // ITERATION 2

  // get result to array

  let objAllProducts = document.querySelectorAll(".product");

  //Calculate subtotal and total

  let sum = 0;

  objAllProducts.forEach((element) => {
    sum += updateSubtotal(element);
  });

  //Push total to html

  let totalResult = document.querySelector("#total-value span");

  totalResult.innerHTML = `${sum}`;
}

// ITERATION 4

function removeProduct(event) {
  const currentButton = event.currentTarget;
  let parent = currentButton.parentNode.parentNode;
  parent.remove();

  calculateAll() - updateSubtotal();
}

// ITERATION 5

function createProduct() {}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  let removeButtons = document.querySelectorAll(".btn.btn-remove");
  removeButtons.forEach((element) => {
    element.addEventListener("click", removeProduct);
  });
});
