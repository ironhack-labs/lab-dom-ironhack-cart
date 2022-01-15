// ITERATION 1

function updateSubtotal(product) {

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const total = price.textContent * quantity.value;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.textContent = total.toFixed(2);
  return total;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
  //... your code goes here

  const arrTr = document.querySelectorAll('.product');

  // ITERATION 3
  //... your code goes here

  const totalPrice = document.querySelector('#total-value span');
  let sum = 0;
  arrTr.forEach(eachProduct => {
    sum += updateSubtotal(eachProduct);
  });
  totalPrice.textContent = sum.toFixed(2);



  // totalPrice.textContent = totalSub;


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
