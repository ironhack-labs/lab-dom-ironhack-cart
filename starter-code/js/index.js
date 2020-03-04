// ITERATION 1

function updateSubtotal($product) {
  // ...
  const $price = $product.querySelector(".price span").innerText;
  const $quantity = $product.querySelector(".quantity input").value;
  const $subTotal = $product.querySelector(".subtotal span");
  return ($subTotal.innerText = $quantity * $price);

}

function calculateAll() {
  // ITERATION 2
  let listOfProducts = document.querySelectorAll(".product");
  let sumOfsubTotals = 0;

  for (let product of listOfProducts) {
    console.log(product)
    let updateProduct = updateSubtotal(product)
    sumOfsubTotals += updateProduct
  }
  document.querySelector("#total-value span").innerText = sumOfsubTotals

}

window.addEventListener('load', () => {
  const $calculateTrigger = document.getElementById('calculate');

  $calculateTrigger.addEventListener('click', calculateAll);
});

// ITERATION 4

function productRemoveListener(event) {
  // ...
}

// ITERATION 5

function createProduct(event) {
  // ...
}
