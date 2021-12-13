// ITERATION 1

function updateSubtotal(product) {
  const priceStr = product.querySelector('.price span').innerHTML;
  const quantityStr = product.querySelector('.quantity input').value;
  const priceNum = parseFloat(priceStr);
  const quantityNum = parseInt(quantityStr);
  const subTotalCalc = quantityNum * priceNum;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = subTotalCalc;
  return subTotalCalc;
}

function calculateAll() {
  let total = 0;
  const allProducts = document.getElementsByClassName('product');
  for (let i = 0; i < allProducts.length; i++){
    total += updateSubtotal(allProducts[i]);
  }
  let totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerHTML = total;
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const productElem = target.parentElement.parentElement;
  const productRow = productElem.parentElement;
  productRow.removeChild(productElem);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelector('.btn-remove');
  removeButtons.addEventListener('click', removeProduct);

  //... your code goes here
});
