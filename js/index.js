// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  let priceValue = price.innerHTML;
  let quantityValue = quantity.value;

  let subtotal = priceValue * quantityValue;

  let result = product.querySelector(".subtotal span");
  return (result.innerHTML = subtotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll('.product');
  
  console.log(products[0])

  products.forEach(product => {
    updateSubtotal(product);
  }); 

  

};


// ITERATION 3
let total = document.querySelector("#total-value span");

// console.log(total);

let totalValue = total.innerHTML;
totalValue = calculateAll;




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
