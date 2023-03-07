// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = Number(price) * Number(quantity);
  const subTotalElement = product.querySelector(".subtotal span");
  subTotalElement.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // ITERATION 2
  let total = 0;
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    total += updateSubtotal(product);
  });
  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  document.querySelector("tbody").removeChild(target.parentNode.parentNode);
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const nameElement = document.querySelector(".create-product .name input");
  const priceElement = document.querySelector(".create-product .price input");

  //Clone product element based on template and update the clone
  const template = document.querySelector("#productrow");
  const cloneProductElement = template.content.cloneNode(true);

  cloneProductElement.querySelector(".price span").innerHTML = (
    !isNaN(priceElement.value) ? Number(priceElement.value) : 0
  ).toFixed(2);
  cloneProductElement.querySelector(".name span").innerHTML = nameElement.value;
  cloneProductElement
    .querySelector(".action .btn-remove")
    .addEventListener("click", removeProduct);

  document
    .querySelector("tbody")
    .appendChild(cloneProductElement)
    .addEventListener("click", removeProduct);

  //Clear inputs fields
  nameElement.value = "";
  priceElement.value = "";
}

window.addEventListener("load", () => {
  calculateAll();
  const calculatePricesBtn = document.querySelector("#calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const removeBtns = document.querySelectorAll(".action .btn-remove");
  removeBtns.forEach(function (btn) {
    btn.addEventListener("click", removeProduct);
  });
  const createBtn = document.querySelector("#create");
  createBtn.addEventListener("click", createProduct);
});
