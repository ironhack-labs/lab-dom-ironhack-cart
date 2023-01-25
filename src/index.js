let productArray = [];
// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let currentPrice = Math.floor(price) * Math.floor(quantity);
  product.querySelector(".subtotal span").innerHTML = currentPrice;
  return currentPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelectorAll(".product");
  // updateSubtotal(singleProduct);

  // ITERATION 2
  const multipleProduct = document.querySelectorAll(".product");
  let finalMultipleProduct = [...multipleProduct];
  let currentPriceOfEachItem = finalMultipleProduct.map((el) => {
    return updateSubtotal(el);
  });

  // ITERATION 3
  let total = currentPriceOfEachItem.reduce((el, acc) => (acc += el), 0);
  let totalValue = document.querySelector("#total-value span");
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(element) {
  let deleteButton = element.querySelector(".btn-remove");
  deleteButton.onclick = () => element.parentNode.removeChild(element);
  //... your code goes here
}

// ITERATION 5

function createProduct(element) {
  const createProductElement = document.querySelector(".create-product");
  const createProductElementName = createProductElement.querySelector(
    "#product-to-create-name"
  ).value;
  const createProductElementPrice = createProductElement.querySelector(
    "#product-to-create-price"
  ).value;
  const productListFirstProduct = document.querySelector(
    ".product-list .product"
  );
  const productList = document.querySelector(".product-list");
  const clone = productListFirstProduct.cloneNode(true);
  clone.querySelector(".name span").innerHTML = createProductElementName;
  clone.querySelector(".price").innerHTML = `$<span>${parseInt(
    createProductElementPrice
  ).toFixed(2)}</span>`;
  clone.querySelector(".subtotal span").innerHTML = "0";
  productList.appendChild(clone);

  const productElement = document.getElementsByClassName("product");
  productArray = [...productElement];
  for (let i = 0; i < productElement.length; i++) {
    removeProduct(productElement[i]);
  }
}

const calculatePricesBtn = document.getElementById("calculate");
calculatePricesBtn.addEventListener("click", calculateAll);

const productElement = document.getElementsByClassName("product");
productArray = [...productElement];
for (let i = 0; i < productElement.length; i++) {
  removeProduct(productElement[i]);
}

const createProductButton = document.querySelector(".btn-create");
createProductButton.onclick = createProduct;
