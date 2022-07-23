// ITERATION 1

function updateSubtotal(product) {

  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;

  product.querySelector('.subtotal span').innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productArr = document.getElementsByClassName('product');
  // productArr.forEach(product => updateSubtotal(product));
  let total = 0;
  for (i = 0; i < productArr.length ; i++) {
    total += updateSubtotal(productArr[i]);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4
window.addEventListener('load', () => {
  const removeBtns = [...document.getElementsByClassName('btn-remove')];
  removeBtns.forEach(btn => btn.addEventListener('click', removeProduct));

  //... your code goes here
});

function removeProduct(event) {
  const target = event.currentTarget;

  const rowToDelete = target.parentNode.parentNode;
  rowToDelete.parentNode.removeChild(rowToDelete);

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
