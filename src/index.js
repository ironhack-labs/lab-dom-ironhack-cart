// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector(".price span").innerHTML);
  const quantity = Number(product.querySelector(".quantity input").value);

  const subtotal = product.querySelector(".subtotal span");
  if (typeof price === "number" && typeof quantity === "number") {
    subtotal.innerHTML = `${(price * quantity).toFixed(2)}`;
  } else {
    subtotal.innerHTML = `0`;
  }
}

function calculateAll() {
  const products = document.querySelectorAll("tr.product");
  products.forEach((product) => updateSubtotal(product));

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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
