// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const amount = price * quantity;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = amount;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productRow = document.getElementsByClassName('product');

  for(let i = 0; i < productRow.length; i++){
    updateSubtotal(productRow[i]);
  }

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  const subtotalsArray = document.getElementsByClassName('subtotal');

  let totalSum = 0;

  for(let i = 0; i < subtotalsArray.length; i++){
    totalSum += parseFloat(subtotalsArray[i].querySelector('span').innerText);
  }

  total.innerText = totalSum;
}

// ITERATION 4

const removeBtnsArray = document.getElementsByClassName('btn-remove');
console.log(removeBtnsArray);
for(let i = 0; i < removeBtnsArray.length; i++){
  removeBtnsArray[i].addEventListener('click', removeProduct);
}

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);

  const removeBtnsArray = document.getElementsByClassName('btn-remove');
  for(let i = 0; i < removeBtnsArray.length; i++){
    removeBtnsArray[i].addEventListener('click', removeProduct);
  }

  target.parentNode.removeChild(target);
  calculateAll();
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
