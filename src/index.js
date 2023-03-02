// ITERATION 1

function updateSubtotal(product) {
  const price = +product.querySelector('.price span').textContent;
  const quantity = +product.querySelector('.quantity input').getAttribute('value');
  const subtotalField = product.querySelector('.subtotal span');
  const subtotal = price * quantity;
  subtotalField.innerHTML = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // -- start of test --
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // -- end of test --

  // ITERATION 2
  // ITERATION 3
  let products = document.getElementsByClassName('product');
  let totalPrice = +document.querySelector('#total-value span').textContent;
  let totalPriceField = document.querySelector('#total-value span');
  for (let i=0; i < products.length; i++) {
    updateSubtotal(products[i]);
    totalPrice += updateSubtotal(products[i]);
  }
  totalPriceField.innerHTML = totalPrice.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest(".product").remove();
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtns = document.getElementsByClassName("btn-remove");
  for (let i=0; i < removeProductBtns.length; i++) {
    removeProductBtns[i].addEventListener('click', removeProduct);
  }
});