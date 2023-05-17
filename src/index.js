// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span");
  const priceValue = Number(price.innerText);
  const quantityObj = product.querySelector(".quantity input");
  const quantity = quantityObj.valueAsNumber;
  subTotalResult = priceValue * quantity;
  let subTotal = product.querySelector(".subtotal span");
  subTotal.innerText = subTotalResult;
  return subTotalResult;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  const productsArr = [...products];
  let priceTotal = 0;
  //console.log(productsArr);

  productsArr.forEach(element => {
    const number = updateSubtotal(element); 
    priceTotal += number;  
  })
  //console.log(typeof priceTotal);
  // ITERATION 3
  //... your code goes here

  const totalPriceSum = document.querySelector("#total-value span");
  totalPriceSum.innerText = priceTotal;

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
