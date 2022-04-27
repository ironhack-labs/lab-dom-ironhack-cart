// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
const price = product.querySelector('.price span')
const quantity= product.querySelector('.quantity input')
const subTotal= product.querySelector('.subtotal span')


const cal= (quantity.value) * Number(price.innerText)
subTotal.innerText= cal;

return subTotal.innerText;


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
let sum = 0

const allProducts = document.querySelectorAll('.product')

allProducts.forEach(element => {
  subTotal=updateSubtotal(element)
  sum += subTotal
  
});

  // ITERATION 3
  //... your code goes here

const total= document.querySelector('#total-value span')

total.innerText= sum
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
