// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = (product.querySelector('.price span').innerHTML);
  const quantity = (product.querySelector('.quantity input').value);
  let subtotal = price*quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const calculAll = [...document.querySelectorAll('.product')];
  let sumTotal = 0;
  console.log(calculAll);
  calculAll.forEach(singleProduct => {
    updateSubtotal(singleProduct)
    sumTotal += singleProduct;
    console.log(singleProduct);
  });
  
  console.log(calculateAll);
  

  // ITERATION 3
  let calcTot = document.querySelector('#total-value span');
  
  calcTot.innerHTML = sumTotal;
}

// Bonus
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
}

// ITERATION 5
// function createProduct() {
  
// }

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  document.querySelector('button', removeProduct).forEach()
});
