// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = parseInt(product.querySelector(".price span").innerHTML);
  const quantity = parseInt(product.querySelector(".quantity input").value);
  const subtotal = price * quantity;

  const subtotalElement = product.querySelector(".subtotal span");
  
  subtotalElement.innerHTML = subtotal;

  return subtotal;

  // console.log({ price, quantity, subtotal }); - to check the properties and if there's errors.
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // const singleProduct = document.querySelector(".product");
  // const subtotal = updateSubtotal(singleProduct);

  // console.log(subtotal);
  // end of test

  // ITERATION 2
  //... your code goes here

  // 1. Start with getting the DOM nodes for each product row
  const products = document.getElementsByClassName("product");
  // 2. Calculate subtotal for each one
  const listOfProducts = [...products]

  let total = 0;

  listOfProducts.forEach(product => {
    const subtotal = updateSubtotal(product);
    total = total + subtotal;
  });

  // ITERATION 3

  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML = total;
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
  console.log("start");
  //... your code goes here
});


