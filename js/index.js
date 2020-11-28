// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  let valuePrice = price.innerHTML;
  let valueQuantity = quantity.value;

  return (subtotal.innerHTML = valuePrice * valueQuantity);
}

function calculateAll() {
  const cartItems = document.querySelectorAll(".product");

  cartItems.forEach((product) => updateSubtotal(product));

  const total = document.querySelector("#total-value span");
  const copiedProducts = [...document.querySelectorAll(".subtotal span")];
  const subtotal = copiedProducts.map((array) => +array.innerHTML);

  return (total.innerHTML = subtotal.reduce((acc, curr) => acc + curr));
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  const parentbtn = target.parentNode;
  const parent = parentbtn.parentNode;
  const quantityTarget = parent.querySelector(".quantity input");

  quantityTarget.value = 0;
  calculateAll();
}
// ITERATION 5

function createProduct(event) {
  console.log("hello");
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removePricesBtn = [
    ...document.getElementsByClassName("btn btn-remove"),
  ];
  removePricesBtn.forEach((button) =>
    button.addEventListener("click", removeProduct)
  );

  const addProductBtn = document.getElementById("create");
  addProductBtn.addEventListener("click", createProduct);
});
