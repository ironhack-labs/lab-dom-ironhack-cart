// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subTotal = product.querySelector(".subtotal span");

  subTotal.innerHTML = calculateSub(price, quantity);

  return calculateSub(price, quantity);
}

function calculateSub(price, quantity) {
  const subTotal = quantity !== 0 ? price.innerHTML * quantity.value : price;
  return subTotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  // console.log(allProducts);

  allProducts.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  const getTotalValue = document.getElementById("total-value");
  let setTotalValue = 0;

  allProducts.forEach((product) => {
    setTotalValue += updateSubtotal(product);
  });

  getTotalValue.innerHTML = `Total: $${setTotalValue}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  //... your code goes here

  const getProduct = target.parentNode.parentNode;
  getProduct.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

const calculatePricesBtn = document.getElementById("calculate");
calculatePricesBtn.addEventListener("click", calculateAll);

const getRemove = document.querySelectorAll(".btn-remove");
getRemove.forEach((btn) => (btn.onclick = removeProduct));
