// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span')
  let quantity = product.querySelector('.quantity input')
  let getSubTotal = product.querySelector('.subtotal span')

  let priceValue = price.innerHTML
  let quantityValue = quantity.value
  let subTotal = priceValue * quantityValue
  
  getSubTotal.innerHTML = subTotal

  //console.log("priceValue", priceValue)
  //console.log("quantity", quantityValue)
  //console.log("subtotal", getSubTotal.innerHTML )
  return subTotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let productList = document.getElementsByClassName('product')
  let sum = 0
  let sum1 = 0  
  for (i=0; i < productList.length; i++) {
      sum = updateSubtotal(productList[i]);
      sum1 = sum1 + sum
  }
  
  console.log(sum1)
  let getTotal = document.querySelector('h2 span')
  getTotal.innerHTML = sum1
  
  
  //console.log (productList)

  // ITERATION 3

  //... your code goes here
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
