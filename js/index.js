// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('input').value;
  let subtotalPrice = price * quantity;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = subtotalPrice;

  return subtotalPrice;
}

//ITERATION 2
function calculateAll() {
let productList = document.getElementsByClassName('product');
let total= 0;

for (let i=0; i<productList.length; i++){
// ITERATION 3
  total = total + updateSubtotal(productList[i]);
}

let totalPrice = document.querySelector('#total-value span');
totalPrice.innerHTML = total;
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  parentRow = target.parentNode.parentNode;
  parentRow.parentNode.removeChild(parentRow);
}

// ITERATION 5

function createProduct() {
  let newProduct = document.querySelector('create-product input');
  let newPrice = document.querySelector('create-product input').value;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let deleteButtons = document.getElementsByClassName('btn-remove')

  for (let i=0; i<deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', removeProduct);
  }

  let createProductButton = document.getElementById('create');
  createProductButton.addEventListener('click', createProduct);

});
