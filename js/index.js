// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subTotal = price * quantity;
  let subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerHTML = subTotal;

  console.log('Calculating subtotal, yey!');

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  let productList = document.querySelectorAll('.product');
  //console.log(productList);
  let Subtotal = 0;
  productList.forEach((element) => {
    Subtotal += updateSubtotal(element);
    //console.log(element);
  });
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = Subtotal;
  return Subtotal;
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
