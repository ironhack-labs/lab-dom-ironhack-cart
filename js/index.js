// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity");
  let priceVal = price.innerHTML;
  let quantityVal = product.querySelector("input").value;
  let subtotalVal = priceVal * quantityVal;
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = subtotalVal;
  return subtotalVal;
}
// ITERATION 2
function calculateAll() {
  let totalPrice = 0;
  let products = document.querySelectorAll(".product");
  products.forEach((prod) => {
    totalPrice += updateSubtotal(prod);
  });
  // ITERATION 3
  document.querySelector("#total-value span").innerText = totalPrice;
}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct(productName, priceVal) {
  let newProd = document.createElement("tr");
  let productName = newProd.classList.add("product");
  newProd.innerHTML = `<td class="name"><span></td>`;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
