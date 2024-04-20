// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  const priceValue = parseFloat(price.innerHTML);
  const quantityValue = parseFloat(quantity.value);

  const subtotalPrice = priceValue * quantityValue;

  //mandar subtotal al dom
  subtotal.innerHTML = subtotalPrice;

  window.addEventListener("load", () => {
    const calculatePricesBtn = document.getElementById("calculate");
    calculatePricesBtn.addEventListener("click", calculateAll);
  });

  return subtotalPrice;
}
// ITERATION 2   // ITERATION 3


function calculateAll() {
  const product = document.getElementsByClassName("product");
  let total = 0;

  for (let i = 0; i < product.length; i++) {
    const subtotal = updateSubtotal(product[i]);

    total += subtotal;
  }

  const totalValue = document.querySelector("#total-value span");

  totalValue.innerHTML = total;
}



// ITERATION 4
/*
function removeProduct(event) {
  const target = event.currentTarget;

  function removeProduct(event) {
    const removeBtn = event.currentTarget;
    const productRow = removeBtn.closest(".product-row");
    productRow.remove();
    updateTotalPrice();
  }

  const removeButtons = document.querySelectorAll(".btn.btn-remove");

  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  function updateTotalPrice() {}
} */

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
