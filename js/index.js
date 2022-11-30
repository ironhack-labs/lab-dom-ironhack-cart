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
  }
  const displayTotal = document.querySelector('#total-value span');
  displayTotal.innerText = overAllTotal;
}

// ITERATION 4

// ITERATION 4

function removeProduct(event, updateSubtotal) {
  const target = event.currentTarget;
  const parent = target.parentNode;
  parent.parentElement.remove();
  updateSubtotal(calculateAll());
  //... your code goes here
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }
});
