// ITERATION 1
function updateSubtotal(calculateAll) {
  const subTotals = document.querySelectorAll('.subtotal span');
  for (let i = 0; i < CalculateAll.length; i++) {
    subTotals[i].innerText = CalculateAll[i];
  }
  calculateAll();
}

function calculateAll() {
  const subtotals = document.querySelectorAll('.subtotal span');
  const arrayOfSubtotals = [];
  let overAllTotal = 0;
  const allProducts = document.getElementsByClassName('product');
  for (let i = 0; i < allProducts.length; i++) {
    const subTotals = document.querySelectorAll('.subtotal span');
    const quantities = document.querySelectorAll('.quantity input');
    const quantityOfProduct = Number(quantities[i].value);
    const prices = document.getElementsByClassName('price-span');
    const priceOfProduct = Number(prices[i].innerHTML);
    const subtotal = quantityOfProduct * priceOfProduct;
    subtotals[i].innerHTML = subtotal;
    arrayOfSubtotals.push(subtotal);
    overAllTotal += subtotal;
    // end of test
    // ITERATION 2
    //... your code goes here
    // ITERATION 3
    //... your code goes here
  }
  const displayTotal = document.querySelector('#total-value span');
  displayTotal.innerText = overAllTotal;
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
