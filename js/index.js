// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subTotal = Number((price * quantity).toFixed(2));
  const unSubtotal = product.querySelector('.subtotal span');
  unSubtotal.innerHTML = subTotal;
  return subTotal;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
 // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
 
  const products = document.querySelectorAll('.product');
  var total = 0;
  
  products.forEach((item)=>{
    total = total + updateSubtotal(item);
  })
  
  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  var btn = document.getElementsByClassName('btn-remove')

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
