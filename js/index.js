// ITERATION 1
function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let total = price.innerText * quantity.value;
  let subtotal = (product.querySelector('.subtotal span').innerText = total);
  return subtotal;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }

  // ITERATION 3
  let totalFinal = 0;
  let allSubTotal = document.querySelectorAll('.subtotal span');
  for (let i = 0; i < allSubTotal.length; i++) {
    totalFinal += Number(allSubTotal[i].innerText);
  }
  let totalHtml = (document.querySelector('#total-value span').innerHTML =
    totalFinal);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget; // Target is a click button
  console.log('The target in remove is:', target);
  const parentOfButton = target.parentNode.parentNode; // button ---> TD ---> TR
  const tBody = parentOfButton.parentNode;
  tBody.removeChild(parentOfButton);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.getElementsByClassName('btn btn-remove');
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct);
  }
});
