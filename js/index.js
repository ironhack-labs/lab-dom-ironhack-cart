// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('#inputQuantity').value;
  let subtotal = price * quantity;
  let subElm = product.querySelector('.subtotal span');
  subElm.innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  let totalTopay = 0;
  let productlistElms = [...document.querySelectorAll('.product')];
  productlistElms.forEach((productTr) => {
    totalTopay += updateSubtotal(productTr);
  });
  document.querySelector('#total-value span').innerHTML = totalTopay;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let parentTr = target.closest('tr');
  console.log({ parentTr });
  document.querySelector('#cart').remove(parentTr);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeButtons = [...document.querySelectorAll('.btn-remove')];
  removeButtons.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });

  //... your code goes here
});
