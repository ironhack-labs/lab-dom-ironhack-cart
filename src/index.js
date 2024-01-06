// ITERATION 1

function updateSubtotal(product) {
  const priceElement = Number(product.querySelector(".price span").innerHTML);
  const quantityElement = Number(
    product.querySelector(".quantity input").value
  );

  const subtotalElement = product.querySelector(".subtotal span");
  const subtotal =
    typeof priceElement === "number" && typeof quantityElement === "number"
      ? priceElement * quantityElement
      : 0;
  subtotalElement.innerHTML = `${subtotal.toFixed(2)}`;
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const products = document.querySelectorAll("tr.product");
  let total = 0;
  products.forEach((product) => (total += updateSubtotal(product)));

  // ITERATION 3
  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML = `${total.toFixed(2)}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
