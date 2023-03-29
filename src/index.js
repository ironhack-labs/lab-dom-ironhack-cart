// table with #cart id contains table describing
// product
// we have one product in our cart with class
// .product inside <tr class="product">
// product has price and quantity properties
// subtotal is price * quantity
// goal is to calculate subtotal price

// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = price * quantity;

  product.querySelector(".subtotal span").innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  let counter = 0;
  document.querySelectorAll(".product").forEach((product) => {
    counter += updateSubtotal(product);
  });
  document.querySelector("#total-value span").textContent = counter;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // const singleProduct = document.querySelector(".product");
  // singleProduct.parentNode.removeChild(singleProduct);
  console.log("The target in remove is:", target);
  target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });

  const createBtn = document.getElementsByClassName(".create-product");
  createBtn.addEventListener("click", createProduct);
});
