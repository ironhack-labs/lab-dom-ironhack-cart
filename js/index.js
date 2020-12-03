// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const productOfElements = price * quantity;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = productOfElements;

  // console.log("Calculating subtotal, yey!");

  return productOfElements;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productList = document.querySelectorAll(".product")
  productList.forEach((product) => updateSubtotal(product))
  //... your code goes here

  // ITERATION 3
  const subtotals = document.querySelectorAll(".subtotal span")
  const subtotalsArr = [...subtotals].map((element) => {
    return parseFloat(element.innerHTML)
  })
  console.log(subtotalsArr)
  const total = document.querySelector("#total-value span");
  const suma = subtotalsArr.reduce((a, c) => {
    return a + c
  }, 0);
  console.log(suma)
  total.innerHTML = suma
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});