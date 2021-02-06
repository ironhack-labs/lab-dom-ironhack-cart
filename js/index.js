// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subTotal = price.innerHTML * quantity.value;
  const subTotalBucket = product.querySelector(".subtotal span");

  subTotalBucket.innerText = subTotal.toFixed(2);

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const totalProducts = document.getElementsByClassName("product");

  let newSubTotal = 0;
  for (i = 0; i < totalProducts.length; i++) {
    newSubTotal += updateSubtotal(totalProducts[i]);
  }

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").innerHTML = newSubTotal.toFixed(
    2
  );
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  const removeProductBtn = document.getElementsByClassName("btn-remove");
  for (i = 0; i < removeProductBtn.length; i++) {
    removeProductBtn[i].addEventListener("click", removeProduct);
  }
});
