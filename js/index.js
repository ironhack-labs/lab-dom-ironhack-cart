// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;

  const quantity = product.querySelector('.quantity input').value;

  const subtotal = price * quantity;

  const subtotalElm = product.querySelector('.subtotal span');

  subtotalElm.innerText = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
const products = document.getElementsByClassName('product');

let amount = 0;
for (let i = 0; i < products.length; i++) {
  amount += updateSubtotal(products[i]);
}

const totalAmount = document.querySelector('#total-value span');

totalAmount.innerHTML = amount;


}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  parent
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
