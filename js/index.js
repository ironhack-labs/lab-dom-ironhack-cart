// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  console.log('Calculating subtotal, yey!');

  const quantity = product.querySelector('.quantity input');

  const priceNumber = parseFloat(price.innerText);
  const quantityNumber = parseFloat(quantity.value);

  const subTotalPrice = priceNumber * quantityNumber;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subTotalPrice;
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  const products = [...document.getElementsByClassName('product')];

  const totalprice = document.querySelector('#total-value span');

  let totalToPay = 0;
  products.forEach((eachProduct) => {
    totalToPay += updateSubtotal(eachProduct);
  });

  totalprice.innerText = totalToPay;
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.parentNode.removeChild(target);

  const total = document.querySelector('#total-value span');
  const subtotal = target.querySelector('.subtotal span');
  total.innerHTML = total.innerHTML - subtotal.innerHTML;
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
