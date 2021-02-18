// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  const subtotalResult = parseFloat(price.innerHTML) * parseInt(quantity.value);

  subtotal.innerHTML = subtotalResult;

  return subtotalResult;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  const total = document.querySelector("#total-value span");
  let totalValue = 0;
}

// ITERATION 3
//... your code goes here
for (let i = 0; i < products.length; i++) {
  totalValue += updateSubtotal(products[i]);
}

total.innerHTML = totalValue;

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  //... your code goes here
  const targetProduct = target.parentNode.parentNode;
  const productList = targetProduct.parentNode;

  productList.removeChild(targetProduct);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  const createProdBtn = document.getElementById("create");
  createProdBtn.addEventListener("click", createProduct);

  refreshRemoveBttns();

  //... your code goes here
});
