function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector("input").value;
  subtotal = product.querySelector(".subtotal");
  subtotal.innerHTML = "$" + quantity * price;
}

function calculateAll() {
  //const singleProduct = document.querySelector(".product");
  //updateSubtotal(singleProduct);
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((el)=>{
    console.log(el);
    updateSubtotal(el);
  });

  

 
  

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
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((el)=>{
    el.addEventListener("change", calculateAll);
    console.log(el);
  });
});

