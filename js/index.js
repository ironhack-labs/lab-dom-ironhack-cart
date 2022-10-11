// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  
  let subtotal = price.innerText * quantity.value;
  let total = product.querySelector('.subtotal span');

  total.innerText = subtotal;
  return subtotal;
  

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  let sum = 0;
  let allProducts = document.getElementsByClassName('product');
  for(let i=0;i<allProducts.length;i++){
    updateSubtotal(allProducts[i]);
    sum += updateSubtotal(allProducts[i]);
  }

  
  // ITERATION 3
  let totalSubtotal = document.querySelector('#total-value span');
  totalSubtotal.innerHTML = sum;
  

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

  const removeButtons = document.querySelectorAll('Remove');
  for(let i = 0;i < removeButtons.length;i++){
    removeButtons[i].onclick = function(event) {
      event.removeProduct();
    }
  }
});
