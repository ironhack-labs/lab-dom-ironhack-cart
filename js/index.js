// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceVal = Number(price.innerHTML);
  const subTotal = priceVal * quantity.value;
  product.querySelector('.subtotal span').innerHTML =  subTotal;
  return subTotal;
 }

function calculateAll() {
  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const productsArr = Array.from(products);
  let totalPrice = 0;
  for (let product of productsArr) {
    totalPrice += updateSubtotal(product);
  }

  // ITERATION 3
  document.querySelector('h2 span').innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('test')
  console.log('The target in remove is:', target);
 
}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('.btn.btn-remove');
  const removeBtnsArr = Array.from(removeBtn);
  for (let i = 0; i < removeBtnsArr.length; i++) {
    removeBtnsArr[i].addEventListener('click', removeProduct);
  }
  
});
