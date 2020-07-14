// ITERATION 1

function updateSubtotal(product) {
  // step 1
  //console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector(".quantity input");
  
  // step 2
  let priceCount = price.innerHTML;
  //console.log(priceCount)
  let quantityAmount = quantity.value;
  //console.log(quantityAmount)

  // step 3
  let totalPrice = priceCount * quantityAmount;
  //console.log(totalPrice)

  // step 4
  let subTotal = product.querySelector(".subtotal span");
  let subTotalPrice = subTotal.innerHTML;
  //console.log(subTotalPrice)

  // step 5
  subTotal.innerHTML = totalPrice

};

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  // Step 1
  let price1 = document.querySelectorAll(".price span")[0];
  let quantity1 = document.querySelectorAll('.quantity input')[0];

  let price2 = document.querySelectorAll(".price span")[1];
  let quantity2 = document.querySelectorAll('.quantity input')[1];

  // Step 2
  let priceCount1 = price1.innerHTML;
  //console.log(priceCount1)
  let quantityAmount1 = quantity1.value;
  //console.log(quantityAmount1)

  let priceCount2 = price2.innerHTML;
  //console.log(priceCount2)
  let quantityAmount2 = quantity2.value;
  //console.log(quantityAmount2)

  // Step 3
  let totalPrice1 = priceCount1 * quantityAmount1;
  //console.log(totalPrice1)

  let totalPrice2 = priceCount2 * quantityAmount2;
  //console.log(totalPrice2)

  // Step 4
  let subTotal1 = document.querySelectorAll(".subtotal span")[0];
  
  let subTotal2 = document.querySelectorAll(".subtotal span")[1];

  // step 5
  subTotal1.innerHTML = totalPrice1

  subTotal2.innerHTML = totalPrice2


  // ITERATION 3
  let totalValue = document.querySelector("#total-value span")
  
  totalValue.innerHTML = totalPrice1 + totalPrice2

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
