// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText;

  //... your code goes here

  const quantity = product.querySelector(".quantity input").value;

  const result = +price * +quantity;
  const subtotal = product.querySelector(".subtotal span");

  subtotal.innerText = result.toFixed(2);
  return result;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  const productList = document.getElementsByClassName("product");
  let total = 0;

  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];
    const result = updateSubtotal(product);
    total = total + result;
  }

  const finalTotalEl = document.querySelector("#total-value span");
  finalTotalEl.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const removeButton = event.currentTarget;
  console.log("The target in remove is:", removeButton);
  //... your code goes here
  const product = removeButton.parentNode.parentNode;
  const productParent = product.parentNode;
  productParent.removeChild(product);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const product = document.querySelector(".product");
  const newProduct = product.cloneNode(true);
  product.parentNode.appendChild(newProduct);

  const productName = document.querySelector(".create-product input").value;
  const newProductName = newProduct.querySelector(".name span");
  newProductName.innerText = productName;

  const productPrice = document.getElementById("new-product").value;
  const newProductPrice = newProduct.querySelector(".price span");
  newProductPrice.innerText = +productPrice;

  const newProductQuantity = newProduct.querySelector(".quantity input");
  newProductQuantity.value = 0;

  const newProductSubtotal = newProduct.querySelector(".subtotal span");
  newProductSubtotal.innerText = 0;

  const newProductRemove = newProduct.querySelector(".action button");
  newProductRemove.addEventListener("click", removeProduct);
}

///

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeBtnList = document.getElementsByClassName("btn btn-remove");

  for (let i = 0; i < removeBtnList.length; i++) {
    const removeButton = removeBtnList[i];
    removeButton.addEventListener("click", removeProduct);
  }

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);
});
