// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;

  let subtotalPrice = price * quantity;

  product.querySelector('.subtotal span').innerHTML = subtotalPrice;
  
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test
    
  // ITERATION 2
  let productTotal = document.getElementsByClassName('product');
  
  let sum = 0;

  for (let i = 0; i < productTotal.length; i++) {
    sum += updateSubtotal(productTotal[i]);
    console.log(sum);
  }
  
  //return sum;
  let total = document.querySelector('#total-value span');

  return total.innerHTML = sum;
   


  // ITERATION 3
  //... your code goes here
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
  const calculatePricesBtn = documesnt.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
