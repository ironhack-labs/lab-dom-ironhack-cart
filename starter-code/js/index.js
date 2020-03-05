// ITERATION 1

function updateSubtotal($product) {
  let price = Number(
    $product.querySelector(".price").querySelector("span").innerHTML
  );
  let cartQuantity = Number(
    $product.querySelector(".quantity").querySelector("input").value
  );
  let subtotal = $product.querySelector(".subtotal");

  return (subtotal.innerHTML = price * cartQuantity);
}

function calculateAll() {
  // For development testing purposes, paste the following code inside of `calculateAll`:
  const $singleProduct = document.querySelector(".product");
  updateSubtotal($singleProduct);
  // End of test

  // ITERATION 2 & ITERATION 3
  let total = 0;
  let $productAmount = document.querySelectorAll(".product");
  $productAmount.forEach(element => {
    total += updateSubtotal(element);
    console.log(total);
  });
  document.getElementById(
    "total-value"
  ).firstElementChild.innerText = total.toFixed(2);
}

window.addEventListener("load", () => {
  const $calculateTrigger = document.getElementById("calculate");

  $calculateTrigger.addEventListener("click", calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}
