// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;

  const quantity = product.querySelector('.quantity input').value;
  
  const total = price * quantity;

  let subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = total;
  subTotal = total;

  return subTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // console.log(singleProduct)
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
const productList = document.querySelectorAll('.product');
    let sum = 0;
   productList.forEach(function(product){    
    sum += updateSubtotal(product);
   })
  
  // ITERATION 3
  //... your code goes here
  let totalValue = document.querySelector('#total-value span');
  // console.log(totalValue)
    totalValue.innerText = sum;
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
