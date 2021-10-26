// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').textContent;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = Number(price) * quantity;

  product.querySelector('.subtotal span').textContent = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  const arrayProducts = Array.from(document.getElementsByClassName('product'));

  let priceTotal = 0;
  let totalValue = document.querySelector('#total-value span');

  arrayProducts.forEach((product) => {
    priceTotal += updateSubtotal(product);
  });
  console.log(priceTotal);
  totalValue.innerHTML = priceTotal;
}

// ITERATION 4
let removeButtons = document.querySelectorAll('.btn-remove');
removeButtons.forEach((item) => item.addEventListener('click', removeProduct));

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productParent = target.parentNode.parentNode;

  productParent.remove();
}
//... your code goes here

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
