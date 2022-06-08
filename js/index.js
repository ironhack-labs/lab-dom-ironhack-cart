// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!')
  const price = Number(product.querySelector('.price span').textContent)
  const quantity = Number(product.querySelector('.quantity input').value)
  const subTotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subTotal
  return subTotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 /*  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  let totalValue = 0;
  const products = document.querySelectorAll('.product')
  products.forEach(product => {
   totalValue += updateSubtotal(product)
  })

  // ITERATION 3

  document.querySelector('#total-value span').innerHTML = totalValue;
  
  
}

// ITERATION 4

function removeProduct(event) {
  console.log(event);
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product input[placeholder|="Product Name"]')
  console.log('productName: ', productName);
  const productPrice = document.querySelector('.create-product input[placeholder|="Product Price"]')
  console.log('productPrice: ', productPrice);

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.querySelectorAll('.btn-remove');
  for (const node of removeBtns) {
    node.addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);

  //... your code goes here
});
