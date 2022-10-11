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
  
  let total = document.querySelector('#total-value span');

  return total.innerHTML = sum;
  
}




// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  let parent = target.parentNode;
  
  parent.remove();

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

});

window.addEventListener('click', () => {
  const removeBtn = document.getElementsByClassName('action');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

});

