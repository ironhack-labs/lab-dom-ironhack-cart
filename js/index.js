// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!')
  //... your code goes here

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  
  const subtotalPrice = Number(price) * Number(quantity)

  const subtotal = product.querySelector('.subtotal span');

  subtotal.innerHTML = subtotalPrice.toFixed(2);
  
  return subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here
  const allMyProducts = document.getElementsByClassName('product');
  
  const allProducts = [...allMyProducts];

  let total = 0;
  allProducts.forEach(cart => {
    total += updateSubtotal(cart)
  }); 

  // ITERATION 3
  //... your code goes here
  const getTotal = document.querySelector('#total-value span');
  
  getTotal.innerHTML = total.toFixed(2);
  
  
  return total;

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
  const removeButton = document.getElementsByClassName('btn-remove'), i;
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', removeProduct);
}
});
