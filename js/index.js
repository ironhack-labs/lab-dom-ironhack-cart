// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = price * quantity;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  const allProducts = document.querySelectorAll('.product');
  let sum = 0;
  allProducts.forEach((product) => {
    sum = sum + updateSubtotal(product);
  });
  const total = document.getElementById('total-value');
  total.querySelector('span').innerText = sum;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const parentProduct = target.parentNode.parentNode;
  parentProduct.remove(); 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const deleteBtns = document.querySelectorAll('.btn-remove');
  deleteBtns.forEach((btn) => btn.addEventListener('click', removeProduct));

  const createProduct = document.getElementById('create');
  createProduct.addEventListener('click', createProduct);
});
