// ITERATION 1

function updateSubtotal(product) {
  
  const price = product.querySelector('.price span').innerHTML;
  // console.log(price);
  const quantity = product.querySelector('.quantity input').value;
  // console.log(quantity);
  let productPrice = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = productPrice;
  // return subtotal;
  // console.log(subtotal);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const productsRows = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let product of productsRows) {
    updateSubtotal(product);
  }

  // ITERATION 3
  
 for (let prod of productsRows) {
   totalPrice += Number(prod.querySelector('.subtotal span').innerHTML);
 }
 document.querySelector('#total-value span').innerHTML = totalPrice;
 
    // console.log(total);
  
 }



// console.log(total);

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
