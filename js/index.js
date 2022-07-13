// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  let priceValue = price.innerHTML;
  const quantity = product.querySelector('.quantity input');
  let quantityValue = quantity.value;

  let subtotalValue = priceValue * quantityValue;
  
  const subtotal = product.querySelector('.subtotal span');
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
  const multiProduct = document.getElementsByClassName('product');
  // let multiProductSubtotal = multiProduct.querySelector('.subtotal span');
  let totalCounter = 0;
  for (let i = 0 ; i < multiProduct.length ; i++) {
    updateSubtotal(multiProduct[i]);
    console.log(multiProduct[i]);
    let multiProductSubtotal = multiProduct[i].querySelector('.subtotal span').innerHTML;
    totalCounter+= Number(multiProductSubtotal);
  }

  // ITERATION 3
  const totalValue = document.querySelector("#total-value span");
  console.log(totalValue);
  totalValue.innerHTML = totalCounter;

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
