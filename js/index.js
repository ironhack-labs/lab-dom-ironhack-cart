function updateSubtotal(product) {
  
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  
  subtotal.innerHTML = price.innerHTML * quantity.value; 
  
  // console.log('Calculating subtotal, yey!');
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  
  // end of test

  // ITERATION 2
  //... your code goes here
  
  let totalSum = 0
  const allProducts = document.getElementsByClassName('product');
  
  for (let i= 0; i < allProducts.length; i++){
     totalSum = updateSubtotal(allProducts[i]);
  }
 
  // ITERATION 3
  //... your code goes here
 
  const totalValue = document.querySelector('#total-value span');
    
  totalValue.innerHTML = totalSum;
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
