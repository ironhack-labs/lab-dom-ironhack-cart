// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const unitPrice = price.innerHTML;
  const qtyValue = quantity.value;
  const totalPrice = product.querySelector('.subtotal span')
  const total = unitPrice * qtyValue;
  return totalPrice.innerHTML = total;
}

function calculateAll() {
  let allTotal = document.querySelector('#total-value span');
  let sum = 0;
  let allProducts = [...document.getElementsByClassName('product')];
  
  allProducts.forEach(product => {
    let subTotal = updateSubtotal(product);
    sum += subTotal;
  });
  
  allTotal.innerHTML = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
 //console.log('The target in remove is:', target);
  const table = target.parentNode.parentNode.parentNode;
  const parent = target.parentNode.parentNode;
  table.removeChild(parent);

  calculateAll();
}

const removeProductBtns = document.querySelectorAll('.btn-remove');
removeProductBtns.forEach((button) => {
button.addEventListener('click', removeProduct);
});


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
