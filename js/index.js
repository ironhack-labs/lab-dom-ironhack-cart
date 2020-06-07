// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;

  const quantity = product.querySelector(".quantity input").value;

  //alert("Calculate Prices Clicked")

  let subTotalprice = price * quantity;

  let subTotal = product.querySelector(".subtotal span");

  subTotal.innerHTML = subTotalprice;

  return subTotalprice;

  // product.querySelector('.subtotal span').innerHMTL

  //   = subTotalPrice
  // return subTotalPrice

  // console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  let totalProducts = document.querySelectorAll(".product");

  let totalSum = 0;

  totalProducts.forEach(function (elm) {
    totalSum += updateSubtotal(elm);
  });

  // ITERATION 3
  //... your code goes here

  document.querySelector("#total-value span").innerHTML = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  console.log("The target in remove is:", target);
  //... your code goes here

  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const remove = document.querySelectorAll(".btn-remove");

  remove.forEach(function (elm) {
    elm.addEventListener("click", removeProduct);
  });
});
