// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  const p = price.innerHTML;
  const q = quantity.value;

  const st = p * q;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = st;

  return st;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
//const singleProduct = document.querySelector('.product');
//updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
  //... your code goes here
  let totalSum = 0; 
  const products = document.querySelectorAll('.product'); 
  products.forEach((singleProduct) => {
    subtotal = updateSubtotal(singleProduct); 
    totalSum += subtotal; 
  });

 
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span');
  total.innerHTML = totalSum;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
  parentNode.removeChild(target);

  const removeBtn = document.querySelector('.btn btn-remove');
  removeBtn.addEventListener('click', removeProduct);
 
  const total = document.querySelector('#total-value span');
  const subtotal = document.querySelector('.subtotal span');
  total.innerHTML = total.innerHTML -subtotal.innerHTML;

}


// ITERATION 5

function createProduct() {
  //... your code goes here
  const createBtn = document.querySelector('button, #create');
  createBtn.onClick = function() {
    let newProduct = document.querySelector('.create-product input')[0];
    console.log(newProduct.value);

  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
