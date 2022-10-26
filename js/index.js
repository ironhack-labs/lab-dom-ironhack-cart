// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let priceValue = price.innerHTML;
  let quantityValue = quantity.value;

  let subTotal = priceValue * quantityValue;
  let subtotalLocator = product.querySelector('.subtotal span');
  subtotalLocator.innerHTML = subTotal;
  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // console.log('calculateAll:', singleProduct);
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //   //... your code goes here
  let sum = 0;
  const productList = document.querySelectorAll('.product');
  Array.from(productList).forEach(
    (singleProduct) => (sum += updateSubtotal(singleProduct))
  );

  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span');
  total.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let child = target.parentNode.parentNode;
  child.parentNode.removeChild(child);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productEntryList = document.querySelectorAll('.create-product input');
  console.log(productEntryList);
  let inputProduct = productEntryList[0].value;
  let unitPrice = productEntryList[1].value;
  let rowToBeCloned = document.querySelector('.product');
  let newRow = rowToBeCloned.cloneNode(true);
  //console.log(inputProduct);
 // console.log(unitPrice);
  newRow.querySelector('.name span').innerHTML = inputProduct;
  newRow.querySelector('.price span').innerHTML = unitPrice;
  newRow.querySelector('.quantity input').value = 0;
  newRow.querySelector('.subtotal span').innerHTML = 0;
  console.log(newRow);
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
  document.querySelector('tbody').appendChild(newRow);
  productEntryList[0].value = '';
  productEntryList[1].value = 0;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  // let removeBtnList =[]
  let removeBtnList = document.querySelectorAll('.btn-remove');
  removeBtnList.forEach((elm) => elm.addEventListener('click', removeProduct));

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);
});
