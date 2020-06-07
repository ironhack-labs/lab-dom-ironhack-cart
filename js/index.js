// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  //... your code goes here
  const quantity = product.querySelector(".quantity input");
  const subtotalPrice = product.querySelector(".subtotal span");
  let subtotal = price.innerHTML * quantity.value;
  subtotalPrice.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll(".product");

  // ITERATION 3
  //... your code goes here
  let totalAmount = 0;
  products.forEach((item) => {
    totalAmount += updateSubtotal(item);
  });
  const totalValue = document.querySelector("h2 span");
  totalValue.innerHTML = totalAmount;
  return totalAmount;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove(); // he probado removeChild primero, pero no funciona, ¿por qué?
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove"); // cuando elegí la clase .btn la tabla desaparecía al pulsar 'calculate price', ¿por qué?
  removeButtons.forEach((elm) => {
    elm.addEventListener("click", removeProduct);
  });

  //... your code goes here
});
