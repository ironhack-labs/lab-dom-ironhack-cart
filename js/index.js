// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  let quantity = product.querySelector('.quantity input[type="number"]');
  //console.log(price.innerText)
  //console.log(quantity.value)
  let subtotalPrice = Number(price.innerText * quantity.value);
  //console.log(subtotalPrice)
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = subtotalPrice;
  console.log("Calculating subtotal, yey!");
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProducts = document.querySelectorAll(".product");
  console.log(allProducts);
  //loop over products array using forEach
  // allProducts.forEach((product)=>{
  //     updateSubtotal(product)
  //})

  // ITERATION 3
  //
  let total = 0;
  allProducts.forEach((product) => {
    total = total + updateSubtotal(product);
  });
  let totalPrice = document.querySelector("#total-value span");
  totalPrice.innerText = total;
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
