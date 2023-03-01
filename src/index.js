// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = price.innerHTML * quantity.value;
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
  const productsArray = [...products];
  productsArray.forEach((element) => {
    updateSubtotal(element);
  });

  // ITERATION 3
  //... your code goes here

  const total = document.querySelector("#total-value span");
  const subtotal = document.querySelectorAll(".subtotal span");

  let count = 0;
  subtotal.forEach((element) => {
    count += Number(element.innerHTML);
  });
  total.innerHTML = count;
}

// ITERATION 4

function removeProduct(event) {
  const productName = event.parentNode;
  const product = productName.parentNode;
  const productTbody = product.parentNode;
  productTbody.removeChild(product);
  console.log("The target in remove is:", productTbody);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productRow = document.querySelectorAll(".products");
  console.log(productRow)

}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll(".btn-remove");
  const addProduct = document.querySelector("#create");

  removeButtons.forEach((element) => {
    element.addEventListener("click", () => {
      removeProduct(element);
    });
  });
  addProduct.addEventListener("click", (element) => {
    console.log(element.target)
    createProduct();
  });
});
