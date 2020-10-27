function updateSubtotal(product) {
  const price = document.querySelector(".price span").innerHTML;
  const quantity = document.querySelector("input").value;
  subtotal = document.querySelector(".subtotal");
  subtotal.innerHTML = "$" + quantity * price;
}

function calculateAll() {
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  const allProducts = document.querySelectorAll(".product");
  console.log(allProducts);
  updateSubtotal( allProducts);
  

 
  

  // ITERATION 3
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
  const input = document.querySelector("input");
  input.addEventListener("change", calculateAll);

  //... your code goes here
});

