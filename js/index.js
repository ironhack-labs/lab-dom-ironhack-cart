const parent = document.querySelector("tbody");
// ITERATION 1

function updateSubtotal(product) {
  const priceEl = product.querySelector(".price span");
  const quantityEl = product.querySelector(".quantity input");

  const subtotal = Number(priceEl.innerHTML) * Number(quantityEl.value);

  const subtotalEl = product.querySelector(".subtotal span");
  subtotalEl.innerHTML = subtotal;

  return subtotal;
}

function calculateAll() {
  // // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.getElementById('product');
  // updateSubtotal(singleProduct);
  // // end of test

  // ITERATION 2
  let total = 0;
  const products = [...document.getElementsByClassName("product")];
  products.forEach((el) => (total += updateSubtotal(el)));

  // ITERATION 3
  const totalEl = document.querySelector("#total-value span");
  totalEl.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const child = target.parentNode.parentNode;
  parent.removeChild(child);
}

// ITERATION 5

function createProduct() {
  const elementToClone = document.querySelector(".product");
  const child = elementToClone.cloneNode(true);
  const name = document.getElementById("nameNewProduct").value;
  const price = document.getElementById("priceNewProduct").value;
  
  child.querySelector(".btn-remove").addEventListener("click", removeProduct);
  child.querySelector(".name span").innerHTML = name;
  child.querySelector(".price span").innerHTML = price;

  parent.appendChild(child);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  
  const removeButtons = [...document.getElementsByClassName("btn-remove")];
  removeButtons.forEach((el) => el.addEventListener("click", removeProduct));
  
  const createProductButton = document.getElementById("create");
  createProductButton.addEventListener("click", createProduct);
  
});
