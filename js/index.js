// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  const subtotalValue = price * quantity; 
  console.log(subtotalValue);
  subtotal.innerHTML = `${subtotalValue}`;
  return subtotalValue;

}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 + 3

const allProducts = document.querySelectorAll('.product');
const allProductArr = [...allProducts];

let total = 0;

for (product of allProductArr) {
  total += updateSubtotal(product);
}
console.log(total);

const totalElement = document.querySelector('#total-value span');
totalElement.innerHTML = `${total}`;

return total;


}

/* Its purpose is to call the 
function updateSubtotal 
with every tr.product DOM node in the table#cart. */

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  let parent = target.parentNode;
  let toDelete = parent.parentNode;

  let cart = document.querySelector('tbody');
  cart.removeChild(toDelete);

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


  const removeBtt = document.getElementsByClassName("btn-remove")
  for (let i = 0; i < removeBtt.length; i++) { 
    removeBtt[i].addEventListener("click", removeProduct) }
  
  });

