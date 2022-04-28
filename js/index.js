// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerText);
  const quantity = Number(product.querySelector('.quantity input').value);
  let subTotal = (price * quantity);
  product.querySelector('.subtotal span').innerText = subTotal;
  console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const products = document.querySelectorAll('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  products.forEach (product =>{
    updateSubtotal(product) 
  } )

  // ITERATION 3
  let total = 0
  const subTotals = document.querySelectorAll('.subtotal span')

  subTotals.forEach (subTotal => {
    total += Number(subTotal.innerText)
  })
  document.querySelector('#total-value span').innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  const table = product.parentNode
  table.removeChild(product)
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn.btn-remove');
  removeBtns.forEach (removeBtn => {
    removeBtn.addEventListener('click',removeProduct)
  })
});
