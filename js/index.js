// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subTotal = price.innerHTML * quantity.value;

  let subTotalUpdate = product.querySelector('.subtotal span');
  subTotalUpdate.innerHTML = `${subTotal}`;
  return subTotal;

  //... your code goes here - Felipe's code
  // const price = product.querySelector('.price span').innerHTML

  // const quantity = product.querySelector('.quantity input').valueAsNumber

  // const subtotal = +price * quantity 

  // const subtotalElement = product.querySelector('.subtotal span')

  // subtotalElement.innerHTML = subtotal

  // return subtotal
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here - Felipe's code
  const productsNode = document.querySelectorAll('.product');
  const productsCollection = document.getElementsByClassName('product');
  console.log(productsNode);
  console.log(productsCollection);
  
  const productsList = [...productsCollection];
  let total = 0;
  productsList.forEach(product => total += updateSubtotal(product))

  // ITERATION 3
  //... your code goes here
  let allProductsTotal = 0;
  productsList.forEach(product => allProductsTotal += +product.querySelector('.subtotal span').innerHTML)
  let allProductsTotalElement = document.querySelector('h2 span')
  allProductsTotalElement.innerHTML = allProductsTotal;
  
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
