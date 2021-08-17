// ITERATION 1
function updateSubtotal(product) {
  // alert("Calculate Prices clicked!");
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  // console.log(quantity);
  // console.log(price);
  const subTotalPrice = quantity * price;
  return (product.querySelector(
    '.subtotal span'
  ).innerText = `${subTotalPrice}`);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multiProducts = document.getElementsByClassName('product');
  let finalTotal = 0;

  for (let product of multiProducts) {
    updateSubtotal(product);
    const subtotals = parseInt(
      product.querySelector('.subtotal span').innerText
    );
    finalTotal += subtotals;
    console.log(finalTotal);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerText = finalTotal;
}

// ITERATION 4

function removeProduct(event) {
  // console.log(document.querySelector('.btn-remove'));
  const removeButtons = document.querySelector('.btn-remove');
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
