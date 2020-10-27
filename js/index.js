// ITERATION 1
// console.log('test');

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input')
  priceNumber = price.innerText;
  quantityNumber = quantity.value;
  subtotalSum = (priceNumber*quantityNumber) //value to be added to subtotal span
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText= subtotalSum;
  return subtotalSum ;
}

function calculateAll() {
  //Iteration 1
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let total = 0;  
  for (let i=0; i<allProducts.length; i++){
    total += updateSubtotal(allProducts[i]);
  }
  // console.log(total);
  allProductsTotal = document.getElementById('total-value');
  // console.log(allProductsTotal);
  allProductsTotal.innerText=`Total: $${total}`;

  // ITERATION 3
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productToRemove = event.querySelector('.product tr');
  console.log(removeProduct);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeItemBtn = document.getElementsByClassName('btn-remove');
  for (let i=0; i<=removeItemBtn.length;i++){
    // console.log(removeItemBtn[i]);
    removeItemBtn[i].addEventListener('click', removeProduct);
  }
});


  // // Get all buttons with the name 'all' and store in a NodeList called 'buttons'
  // var buttons = document.getElementsByName('all');

  // // Loop through NodeList and call the click() function on each button
  // for(var i = 0; i <= buttons.length; i++)  
  //    buttons[i].click();