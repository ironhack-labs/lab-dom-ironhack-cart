// ITERATION 1

function updateSubtotal(product) {
  //console.log("Calculating subtotal, yey!");
  const price = document.querySelector(".price span").innerHTML;
  const quantity = document.querySelector(".quantity input").value;

  let subTotal = price * quantity;

  const newSubTotal = product.querySelector(".subtotal span");
  return (newSubTotal.innerHTML = subTotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  //const singleProducts = document.querySelector(".product");
  //updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
 
  //const products = document.querySelector(".product")
  // let total = 0;
  // for (let i = 0; i < Products.length; i++){
  // let firstTotal = updateSubtotal(Products[i]);
  // total += firstTotal;}

  const products = document.querySelectorAll(".product");
  let totalValue = 0;
  products.forEach((product) => {
    totalValue += updateSubtotal(product);
  });
// ITERATION 3
  const total = document.querySelector("#total-value span");
  total.textContent = totalValue;
  

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
});
