// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price > span').innerText;
  const quantity = product.querySelector('.quantity > input').value;
  const subTotal = price*quantity;
  let subTotalText = product.querySelector('.subtotal > span');
  subTotalText.innerHTML = subTotal;
}


function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  for (product of allProducts) {
    updateSubtotal(product)
  }
  }
  // ITERATION 3
  let totalValue = document.querySelector('#total-value > span');
  const subTotals = document.querySelectorAll('.subtotal > span');
  let totalSum = 0;
  for (subTotal of subTotals) {
    totalSum += Number(subTotal.innerText);
  }
  totalValue.innerHTML = totalSum;


// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  
  
  const productElement = target.parentElement.parentElement;
  const tableBodyElement = productElement.parentElement;
  tableBodyElement.removeChild(productElement);
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