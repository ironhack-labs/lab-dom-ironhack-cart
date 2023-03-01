// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    //... your code goes here
let price = product.querySelector(".price span");
let quantity = product.querySelector(".quantity input");
let subtotal = product.querySelector(".subtotal span");

let priceValue = price.innerHTML;
let quantityValue = quantity.value;

let subtotalValue = (priceValue * quantityValue);
subtotal.innerHTML = subtotalValue;
return subtotalValue;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

let allProducts = [...document.getElementsByClassName("product")];
let total = 0;
for (let i = 0; i < allProducts.length; i++){
total += updateSubtotal(allProducts[i]);
}

// ITERATION 3
//... your code goes here

document.querySelector("#total-value span").innerHTML = total;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
