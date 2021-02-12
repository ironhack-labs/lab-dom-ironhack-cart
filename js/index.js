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

  // let product1 = products[0];
  // let product2 = products[1];

  products.forEach(product => {
    updateSubtotal(product);
  }); 

  let subtotal1 = document.querySelector('.subtotal span').innerHTML;
  let subtotal2 = document.querySelector('.product:nth-child(2) .subtotal span').innerHTML;
  let subtotal1Val = Number(subtotal1);
  let subtotal2Val = Number(subtotal2);
  let total = subtotal1Val + subtotal2Val;

  let totalOfCart = document.querySelector("#total-value span");
  totalOfCart.innerHTML = total;
};


// ITERATION 3
//>See up




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
