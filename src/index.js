// ITERATION 1

function updateSubtotal(product) {
  const priceValue = product.querySelector(".price span").innerText;
  const quantityValue = product.querySelector(".quantity input").value;
  const subtotalEl = product.querySelector(".subtotal span");

  const subtotalValue = priceValue * quantityValue;

  subtotalEl.innerText = subtotalValue;

  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");

  let totalPrice = 0;

  allProducts.forEach(product => {
    totalPrice += updateSubtotal(product);
  });

  // ITERATION 3
  const totalEl = document.querySelector("#total-value span");
  totalEl.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parent = target.parentNode.parentNode;
  const subtotalEl = parent.querySelector('.subtotal span')
  const totalEl = document.querySelector("#total-value span")

  totalEl.innerText -= subtotalEl.innerText
  parent.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.
    forEach(button => {
      button.addEventListener("click", event => {
        removeProduct(event);
      });
    });
});
