// ITERATION 1

function updateSubtotal(product) {
  alert('Calculating subtotal, yey!');
  const $price = product.querySelector('.price>span').innerHTML;
  const $quantity = product.querySelector('.quantity>input').value;
  let subTotal = Number($price * $quantity)
  let subProductTotal = product.querySelector('.subtotal span').innerText = subTotal;

  return subProductTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 const totalProducts = Array.from(document.querySelector('.product'));
 let total=0
 totalProducts.forEach((product) => {
   updateSubtotal(product);
   total += parseInt(product.querySelector('.subtotal span')).innerText
 });

  // ITERATION 3
let sumAllSubtotals = 0;
for (let product of totalProducts) {
sumAllSubtotals += updateSubtotal(product);
document.querySelector('total-value span').innerText = sumAllSubtotals
return sumAllSubtotals
}
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