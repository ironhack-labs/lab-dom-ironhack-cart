// ITERATION 1

function updateSubtotal(product) {
    //console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value; //could use innerHTML here but this works too
  let subTotal = price * quantity
  let subTotalElement = product.querySelector('.subtotal span');
  subTotalElement.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i <= products.length-1; i++) { //must be -1 to avoid passing undefined here!!!
    total += updateSubtotal(products[i]);
  }

  // ITERATION 3
  let totalElement = document.querySelector('#total-value span')
  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode;
  console.log('The target in remove is:', target);
  let productParent = target.parentNode.parentNode;
  console.log(productParent);
  productParent.removeChild(target.parentNode);
  calculateAll();
} //This feels messy. There must be a better way to do this!

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeProductsBtn = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removeProductsBtn.length; i++) {
    removeProductsBtn[i].addEventListener('click', removeProduct);
  }
  
});
