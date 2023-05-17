// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // console.log(product)
  const price = product.querySelector('.price span')
  // console.log(price);
  // console.log(typeof price);
  const quantity = product.querySelector('.quantity input')
  // console.log(quantity);
//   console.log(typeof quantity);
  let priceValue = Number(price.innerText);
  let quantityValue = quantity.value;
  // console.log(priceValue)
  // console.log(quantityValue)

  let subtotalValue = priceValue * quantityValue;
  // console.log(subtotalValue);

  const subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = subtotalValue;
  // console.log(subtotal);
  // console.log(subtotal.innerHtml);
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
    const product = document.getElementsByClassName('product');
    // console.log(product);
    const productArray = [...product];
    console.log(productArray);
    productArray.forEach(function(e){
      updateSubtotal(e)
    })

  // ITERATION 3
  //... your code goes here
  // query: #total-value span
  const totalSum = document.querySelector('#total-value span')
  console.log(totalSum);
  let totalSumValue = Number(totalSum.innerText);
  console.log(totalSumValue);
  let sum = 0;
  productArray.forEach(function(e){

  })
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
