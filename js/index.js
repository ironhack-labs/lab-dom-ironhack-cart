// ITERATION 1

function updateSubtotal(singleProduct) {
  let price = singleProduct.querySelector('.product .price span').innerText; 
  let quantity = singleProduct.querySelector('.product .quantity input').value; 
  let subTotal = singleProduct.querySelector('.subtotal span')
  subTotal.innerText = price * quantity;
  return Number(subTotal.innerText)

}
 // ITERATION 2

function calculateAll() {
  let products = document.getElementsByClassName('product');
  let totalPrice = 0;
 
  for (let i=0; i<products.length; i++){
    totalPrice += updateSubtotal(products[i]);

  }

// ITERATION 3

  document.querySelector('#total-value span').innerText =totalPrice; 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let products = document.getElementsByClassName('product');
 
  for (let i=0; i<products.length; i++){
  const removeProductBtn =document.querySelectorAll('.btn-remove')[i];
  removeProductBtn.addEventListener('click', removeProduct);
  console.log(products)
  }
});
