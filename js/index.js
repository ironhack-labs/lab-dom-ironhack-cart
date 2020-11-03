// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.price span`).innerHTML;
  const quantity = product.querySelector(`.quantity input`).value;
  const subtotalPrice = price * quantity;
  const subtotal = product.querySelector(`.subtotal span`);
  return subtotal.innerHTML = subtotalPrice;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 + 3
  let sumTotal = 0;
  const allProduct = document.querySelectorAll(`.product`);
  allProduct.forEach((elem) => {
    updateSubtotal(elem);
    sumTotal += updateSubtotal(elem);
  });
const totalValue = document.querySelector(`#total-value span`);
totalValue.innerHTML = sumTotal;
}
  //... your code goes here

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  event.parentNode.parentNode.remove();
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const btnRemove = document.querySelectorAll(`.btn-remove`);
  btnRemove.forEach((elem) => {
      elem.addEventListener(`click`, () => {
        removeProduct(elem);
      });
  });
  //... your code goes here
});