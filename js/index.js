// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span').innerHTML;
  console.log(price);
  let quantity = product.querySelector('input').value;
  console.log(quantity);
  let subtotal = product.querySelector('.subtotal span');
  let subtotalPrice = price * quantity;
  subtotal.innerText = subtotalPrice;
  // console.log(subtotalPrice);
  // console.log(subtotal);
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // console.log(singleProduct);
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multiProduct = document.querySelectorAll('.product');
  let sumTotalPrice = 0;
  for (i = 0; i < multiProduct.length; i++) {
    sumTotalPrice += updateSubtotal(multiProduct[i]);
  }
  // console.log(multiProduct);

  // ITERATION 3
  //... your code goes here
  let sumTotal = document.querySelector('#total-value span');
  // let sumTotalPrice = Number(updateSubtotal(multiProduct[i])++); 
  // let sumTotalPrice += updateSubtotal(multiProduct[i]);
  sumTotal.innerHTML = sumTotalPrice;
  // console.log(sumTotalPrice);
  // console.log(sumTotal);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  // let removeItem = document.querySelectorAll('.btn.btn-remove');
  removeItem.addEventListener('click', () => {
    const removeItem = document.querySelectorAll('.btn.btn-remove');
    removeItem.addEventListener('click', removeProduct);
  });
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
