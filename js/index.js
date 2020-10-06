// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input').value;
  let subTotalPrice = price.innerHTML * quantity;
  // console.log(price.innerHTML);
  // console.log(quantity);
  // console.log(subTotalPrice);

  let subTotal = product.querySelector('.subtotal span');
  // console.log(subTotal);
  subTotal.innerHTML = subTotalPrice;
  // console.log(subTotal.innerHTML);
  return subTotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName("product"); //Sacar la array/collection de products

  // console.log(allProducts)

  let sum = 0;

  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
    sum += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  //... your code goes here

  document.querySelector('#total-value span').innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let parent = target.parentNode.parentNode
  parent.parentNode.removeChild(parent)
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
  const removeElementsBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeElementsBtn.length; i++) {
    removeElementsBtn[i].addEventListener('click', removeProduct);
  }

  // const createProductBtn = document.getElementById('create');
  // createProductBtn.addEventListener('click', createProduct);
});