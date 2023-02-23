// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotalPrice = product.querySelector('.subtotal span');
  subtotalPrice.innerHTML = (price * quantity)
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  for (let i = 0; i < allProducts.length; i++) {
    updateSubtotal(allProducts[i]);
  }
  let priceTotal = 0
  let allsubtotalPrice = document.querySelectorAll('.subtotal span');
  for (let i = 0; i < allsubtotalPrice.length; i++) {
    priceTotal = priceTotal + parseFloat(allsubtotalPrice[i].innerHTML)
  }
  let total = document.querySelector('#total-value span');
  total.innerHTML = priceTotal
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let productRow = target.parentNode.parentNode;
  productRow.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let removeButton = document.querySelectorAll('.btn.btn-remove');
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', removeProduct);
  }
});
