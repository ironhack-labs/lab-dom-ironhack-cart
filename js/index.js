// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTot = product.querySelector('.subtotal span');

  const pNum = Number(price.textContent);
  const qNum = Number(quantity.value) || 0;

  const subTotalCal = pNum * qNum
  subTot.textContent = subTotalCal;
  return subTotalCal;
}


// ITERATION 2
function calculateAll() {
  const productsAll = document.getElementsByClassName('product')

  const productsArr = [...productsAll]

  let totalAllPrices = 0

  productsArr.forEach(productObj => {
    const productTotal = updateSubtotal(productObj)
    totalAllPrices += productTotal;
  });

// ITERATION 3: Total
  let totalSpan = document.querySelector('#total-value span')
  
  totalSpan.textContent = totalAllPrices

  return totalSpan
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
