// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const newSubtotal = price.innerHTML * quantity.value;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = newSubtotal;
  return newSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let totalPrice = 0;
  for(i=0; i<products.length; i++){
    totalPrice += updateSubtotal(products[i]);
  }


  // ITERATION 3
  document.querySelector('#total-value span').textContent = totalPrice.toString();
  return totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
  const productRow = target.parentNode.parentNode;
  const tbody = productRow.parentNode;
  tbody.removeChild(productRow);
  calculateAll();
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtn = document.getElementsByClassName("btn btn-remove");
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

});
