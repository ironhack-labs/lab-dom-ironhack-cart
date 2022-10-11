// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

 const newPrice = price.innerText 
  const newQuantity = quantity.value 

  const totalPrice = newPrice*newQuantity;

  let subtotalPrice = product.querySelector('.subtotal span');
  subtotalPrice.innerText = totalPrice;
  return totalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  let allProduct = document.getElementsByClassName('product');
  let totalFinal = 0;
  for (let i = 0; i < allProduct.length; i++){
    //updateSubtotal(allProduct[i]);

    totalFinal += updateSubtotal(allProduct[i]);
  }

  // ITERATION 3
  const totalSpan = document.querySelector('#total-value span');
  totalSpan.innerText = totalFinal;
  

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
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

  //... your code goes here
});
