// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const amount = price * quantity;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = amount;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productRow = document.getElementsByClassName('product');

  for(let i = 0; i < productRow.length; i++){
    updateSubtotal(productRow[i]);
  }

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  const subtotalsArray = document.getElementsByClassName('subtotal');

  console.log(total);
  console.log(subtotalsArray);

  let totalSum = 0;

  for(let i = 0; i < subtotalsArray.length; i++){
    totalSum += parseFloat(subtotalsArray[i].querySelector('span').innerText);
    console.log(totalSum);
  };

  total.innerText = totalSum;
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
