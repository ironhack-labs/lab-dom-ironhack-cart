// ITERATION 1

function updateSubtotal(product) {
 const price = product. querySelector ( '.price span' ).textContent;
 const quantity = product. querySelector ( '.quantity input ' ).value;
 const subtotal = price * quantity 
 product. querySelector ( '.subtotal span' ).textContent= subtotal;

 return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test
  let totalPrice = 0;
  const product = document.getElementsByClassName ('product');
  const productArr = [...product]; 
  productArr.forEach( product => totalPrice += updateSubtotal(product))
  console.log(totalPrice)
  document.getElementsById( 'total-value span').textContent = totalPrice;
  
  
  

  // ITERATION 2
  //... your code goes here

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
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
