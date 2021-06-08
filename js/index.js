// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const  price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = (price * quantity)
  //... your code goes here
  product.querySelector('.subtotal span').innerText = `${subTotal}`
  console.log(subTotal)
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  console.log(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productList = document.querySelectorAll('.product');
  console.log(productList)

  

  // ITERATION 3
  //... your code goes here
  let totalPrice = 0;
  for (let product of productList) {
    totalPrice += updateSubtotal(product);
  }
  document.querySelector('#total-value span').innerText = `${totalPrice}`
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
