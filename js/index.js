// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity
  product.querySelector('.subtotal span').innerHTML = subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let selectedProducts = document.getElementsByClassName('product');
  for (i=0; i<selectedProducts.length; i++) {
    updateSubtotal(selectedProducts[i])
  }

  // ITERATION 3
  //... your code goes here
  let totalPrice = 0;
  for (i=0; i<selectedProducts.length; i++) {
    totalPrice += parseInt(selectedProducts[i].querySelector('.subtotal span').innerHTML)
  }
  document.querySelector('#total-value span').innerHTML = totalPrice
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  let targetParent = target.parentNode.parentNode
  targetParent.remove();
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  let removeButtons = document.getElementsByClassName('btn-remove');
  for (i=0; i<removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', removeProduct)
  }
  
});
