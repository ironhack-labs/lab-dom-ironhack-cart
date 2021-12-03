// ITERATION 1

function updateSubtotal(product) {
 
  const price = product.querySelector('.price span').innerText;
  const quantityInput = product.querySelector('.quantity input').value;
  const result = Number(price) * Number(quantityInput);
  const getSubtotal = product.querySelector('.subtotal span');
  
  //console.log('Calculating subtotal, yey!');
  getSubtotal.innerHTML = result;
  return result;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const multipleProducts = document.querySelectorAll('.product')
  
  let counter= 0;
  for (i = 0; i < multipleProducts.length; i++){ 
    counter += updateSubtotal(multipleProducts[i]);
  }
  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = counter;
  
  return counter;

}


  


    // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


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
