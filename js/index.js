// ITERATION 1

function updateSubtotal(product) {
  
  let quantity = product.querySelector('.quantity input').value
  let price = product.querySelector('.price span').innerText
  let tprice =  price * quantity
  product.querySelector('.subtotal span').innerText = tprice
  return tprice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
 const products = document.getElementsByClassName('product')
 for (let i = 0; i < products.length; i++) {
   total = total + updateSubtotal(products[i])
  }

  // ITERATION 3
document.getElementById('total-value')
  document.querySelector('#total-value span').innerText = total
}

// ITERATION 4
 function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here


  // start with querying the document for all "Remove" buttons, 
  // loop through them, and add a click event listener to each,
  //  passing a named function removeProduct as the callback argument. 

 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const remove = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', removeProduct);
   }
 
 
});
