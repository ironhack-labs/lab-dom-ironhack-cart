// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElement = product.querySelector('.price span');

  const price = Number(priceElement.innerHTML);
  
  const quantityElement = product.querySelector('.quantity input');

  const quantity = Number(quantityElement.value);

  let subtotal = price * quantity;

  const subtotalElement = product.querySelector('.subtotal span');

 return subtotalElement.innerHTML = subtotal;
  
}

updateSubtotal(document);


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  console.log(singleProduct);

  updateSubtotal(singleProduct);

  // ITERATION 2
  document.querySelectorAll('.product').forEach(( el ) => { 
  updateSubtotal( el );
  });

  // ITERATION 3

  const productDomElements = [...document.querySelectorAll('.product')];
  let total = productDomElements
    .map(product => {
      return updateSubtotal(product);
    })
    .reduce((a,b) => a+b, 0);
    document.querySelector('#total-value span').innerHTML = total
  return total

  /*

  Alternative for Iteration 3

  let totalPrice = document.querySelector('#total-value span');
  console.log(totalPrice);

  const allSubtotals = document.querySelectorAll('.subtotal span');
  console.log(allSubtotals);

  const arrSubtotals = [...allSubtotals];

  let getSubtotal = 0;

  arrSubtotals.forEach(( el ) => {
    getSubtotal += Number( el.innerHTML )
  });

  console.log(getSubtotal);

  totalPrice.innerHTML = getSubtotal;
*/

}
calculateAll();

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