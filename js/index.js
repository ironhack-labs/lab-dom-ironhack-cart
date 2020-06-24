// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = (price * quantity);
  const subTotalAmount = (product.querySelector('.subtotal span').innerHTML = subTotal);
  return subTotalAmount;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product) => {
    updateSubtotal(product);
  })
  console.log(allProducts); //checking if allProducts returns an array or object.

  // ITERATION 3
  const totalPrice = [...allProducts].reduce((accum, currValue) => {
    return accum + updateSubtotal(currValue)
  }, 0);
  const total = document.querySelector(`#total-value span`);
  total.innerHTML = totalPrice;
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