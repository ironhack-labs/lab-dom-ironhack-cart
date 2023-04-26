// ITERATION 1

//... your code goes here

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotalText = product.querySelector(".subtotal span");

  subtotal = price * quantity;
  subtotalText.innerText = subtotal;

  product.querySelector(".subtotal span").innerText = parseFloat(subtotal).toFixed(2);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll(".product");

  let total = 0;
  products.forEach((eachProd) => {
    total += updateSubtotal(eachProd);
  });


  // ITERATION 3
  let totalValueDOM = document.querySelector("#total-value span");
  totalValueDOM.innerText = total;}

// ITERATION 4

function removeProduct(event) {
  let target = event.currentTarget;
  console.log('The target in remove is:', target);

  let productRemove = target.parentNode.parentNode;
  console.log(productRemove);
  productRemove.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let PnNameValue = document.querySelector(
    ".create-product td input[type=text]"
  ).value;
  let PpPriceValue = document.querySelector(
    ".create-product td input[type=number]"
  ).value;

  let productTable = document.querySelector("#cart tbody");
  let newProduct = document.createElement("tr");
  newProduct.classList.add("product");
  let newProductName = document.createElement("td");
  newProductName.classList.add("name");
  let newPNSpan = document.createElement("span");
  newPNSpan.innerText = PnNameValue;
  newProductName.append(newPNSpan);

  let newProductPrice = document.createElement("td");
  newProductPrice.classList.add("price");
  newProductPrice.innerText = "$";
  let newPPSpan = document.createElement("span");
  newPPSpan.innerText = PpPriceValue;
  newProductPrice.append(newPPSpan);

  let newProductQuantity = document.createElement("td");
  newProductQuantity.classList.add("quantity");
  let newPQInput = document.createElement("input");
  newPQInput.type = "number";
  newPQInput.value = 0;
  newPQInput.min = 0;
  newPQInput.placeholder = "Quantity";
  newProductQuantity.append(newPQInput);

  let newProductSubtotal = document.createElement("td");
  newProductSubtotal.classList.add("subtotal");
  newProductSubtotal.innerText = "$";
  let newPSSpan = document.createElement("span");
  newPSSpan.innerText = 0;
  newProductSubtotal.append(newPSSpan);

  let newProductBtn = document.createElement("td");
  newProductBtn.classList.add("action");
  let newPBBtn = document.createElement("button");
  newPBBtn.classList.add("btn");
  newPBBtn.classList.add("btn-remove");
  newPBBtn.innerText = "Remove";
  newPBBtn.addEventListener("click", removeProduct);
  newProductBtn.append(newPBBtn);

  newProduct.append(newProductName);
  newProduct.append(newProductPrice);
  newProduct.append(newProductQuantity);
  newProduct.append(newProductSubtotal);
  newProduct.append(newProductBtn);
  productTable.append(newProduct);
}


window.addEventListener('load', () => {
  let calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeBt = document.querySelectorAll(".btn-remove");
  removeBt.forEach((eachRemove) => {
    eachRemove.addEventListener("click", removeProduct);
  });

  let createButn = document.querySelector("#create");
  createButn.addEventListener("click", createProduct);
});
